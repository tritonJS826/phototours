import {prisma} from 'src/db/prisma';
import {DifficultyLevel} from 'src/generated/prisma';
import {Request, Response} from 'express';

const HTTP_STATUS_NOT_FOUND = 404;
const HTTP_STATUS_BAD_REQUEST = 400;
const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;

export const getAllTours = async (req: Request, res: Response) => {
  try {
    const tours = await prisma.tour.findMany({
      include: {
        guide: {include: {user: true}},
        categories: true,
        tags: true,
        dates: true,
        photos: true,
        videos: true,
        materials: true,
      },
    });
    res.json(tours);
  } catch {
    return res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to fetch tours'});
  }
};

export const getTourById = async (req: Request, res: Response) => {
  try {
    const tour = await prisma.tour.findUnique({
      where: {id: Number(req.params.id)},
      include: {
        guide: {include: {user: true}},
        categories: true,
        tags: true,
        dates: true,
        photos: true,
        videos: true,
        materials: true,
      },
    });
    if (!tour) {
      return res
        .status(HTTP_STATUS_NOT_FOUND)
        .json({message: 'Tour not found'});
    }
    res.json(tour);
  } catch {
    return res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to fetch tour'});
  }
};

export const createTour = async (req: Request, res: Response) => {
  try {
    const {
      title = '',
      description = '',
      region = '',
      difficulty = '',
      price = 0,
      program = '',
      guideId = null,
    } = req.body;

    if (!title || !description || !region || !difficulty || !price || !guideId || !program) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'Missing required fields'});
    }
    if (!Object.values(DifficultyLevel).includes(difficulty)) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'Invalid difficulty level'});
    }
    const newTour = await prisma.tour.create({
      data: {
        title,
        description,
        region,
        difficulty: difficulty as DifficultyLevel,
        price,
        program,
        guideId,
      },
    });
    res.status(HTTP_STATUS_CREATED).json(newTour);
  } catch {
    return res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to update tour'});
  }
};

export const updateTour = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const updated = await prisma.tour.update({
      where: {id: Number(req.params.id)},
      data,
    });
    res.json(updated);
  } catch {
    return res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to update tour'});
  }
};

export const deleteTour = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    await prisma.$transaction([

      prisma.photo.deleteMany({where: {tourId: id}}),
      prisma.video.deleteMany({where: {tourId: id}}),
      prisma.tourDate.deleteMany({where: {tourId: id}}),
      prisma.review.deleteMany({where: {tourId: id}}),
      prisma.tourMaterial.deleteMany({where: {tourId: id}}),
      prisma.booking.deleteMany({where: {tourId: id}}),

      prisma.$executeRawUnsafe(`
        DELETE FROM "_TourCategories" WHERE "B" = ${id}
      `),
      prisma.$executeRawUnsafe(`
        DELETE FROM "_TourTags" WHERE "B" = ${id}
      `),

      prisma.tour.delete({where: {id}}),
    ]);

    res.json({message: 'Tour deleted successfully'});
  } catch (err) {
    return res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({
      error: 'Failed to delete tour',
      details: err instanceof Error ? err.message : err,
    });
  }
};

// PATCH /api/tours/:id/categories
export const updateTourCategories = async (req: Request, res: Response) => {
  try {
    const categories = req.body.categories;
    const updatedTour = await prisma.tour.update({
      where: {id: Number(req.params.id)},
      data: {
        categories: {
          set: [],
          connect: categories.map((catId: number) => ({id: catId})),
        },
      },
    });

    res.json(updatedTour);
  } catch {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to update categories'});
  }
};

// PATCH /api/tours/:id/tags
export const updateTourTags = async (req: Request, res: Response) => {
  try {
    const tags = req.body.tags;
    if (!Array.isArray(tags)) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'Tags must be an array of strings'});
    }
    const updatedTour = await prisma.tour.update({
      where: {id: Number(req.params.id)},
      data: {
        tags: {
          set: [],
          connectOrCreate: tags.map(tagName => ({
            where: {name: tagName},
            create: {name: tagName},
          })),
        },
      },
      include: {tags: true},
    });
    res.json(updatedTour);
  } catch {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to update tags'});
  }
};

// PATCH /api/tours/:id/dates
export const addTourDates = async (req: Request, res: Response) => {
  try {
    const tourId = Number(req.params.id);
    const datesFromClient = req.body.dates || [];

    const validDates = datesFromClient
      .map((d: string) => {
        const dateObj = new Date(d);

        return !isNaN(dateObj.getTime()) ? dateObj : null;
      })
      .filter(Boolean);
    await prisma.tourDate.deleteMany({where: {tourId}});
    if (validDates.length > 0) {
      await prisma.tourDate.createMany({
        data: validDates.map((date: Date) => ({
          date,
          tourId,
        })),
      });
    }
    res.json({message: 'Tour dates updated successfully'});
  } catch {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to update tour dates'});
  }
};

// PATCH /api/tours/:id/photos
export const addTourPhotos = async (req: Request, res: Response) => {
  try {
    if (!req.files || !Array.isArray(req.files) || !req.files.length) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'No files uploaded'});
    }
    const photos = await Promise.all(
      (req.files as Express.Multer.File[]).map(file =>
        prisma.photo.create({
          data: {
            tourId: Number(req.params.id),
            url: file.path,
          },
        }),
      ),
    );

    res.status(HTTP_STATUS_CREATED).json({message: 'Photos uploaded', photos});
  } catch {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to add photos'});
  }
};

// PATCH /api/tours/:id/videos
export const addTourVideos = async (req: Request, res: Response) => {
  try {

    if (!req.file) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'No video file uploaded'});
    }
    const videoUrl = req.file.path;
    const updatedTour = await prisma.tour.update({
      where: {id: Number(req.params.id)},
      data: {videos: {create: {url: videoUrl}}},
    });
    res.json({
      message: 'Video uploaded and added successfully',
      tour: updatedTour,
    });
  } catch {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to add video'});
  }
};

export const addTourMaterials = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const type = req.body.type;
    const file = req.file;
    if (!file) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'File is required'});
    }
    if (!title || !type) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'Title and type are required'});
    }
    const url = file.path;
    const updatedTour = await prisma.tour.update({
      where: {id: Number(id)},
      data: {
        materials: {
          create: {
            title,
            type,
            url,
          },
        },
      },
      include: {materials: true},
    });
    res.json(updatedTour);
  } catch {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to add material'});
  }
};
// DELETE /tours/materials/:id
export const deleteMaterial = async (req: Request, res: Response) => {
  const {id} = req.params;
  try {

    const deletedMaterial = await prisma.tourMaterial.delete({where: {id: Number(id)}});
    res.json(deletedMaterial);
  } catch {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({message: 'Material not found'});
  }
};

export const addOrUpdateTourMaterial = async (req: Request, res: Response) => {
  try {
    const tourId = Number(req.params.id);
    const {id, title, type} = req.body;
    const file = req.file;

    if (!title || !type) {
      return res
        .status(HTTP_STATUS_BAD_REQUEST)
        .json({error: 'Title and type are required'});
    }

    let urlToSave: string;
    if (file) {
      urlToSave = file.path;
    } else if (id) {

      const existing = await prisma.tourMaterial.findUnique({where: {id: Number(id)}});
      if (!existing) {
        return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'Material not found'});
      }
      urlToSave = existing.url;
    } else {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'File is required'});
    }

    let material;
    if (id) {
      material = await prisma.tourMaterial.update({
        where: {id: Number(id)},
        data: {title, type, url: urlToSave},
      });
    } else {
      material = await prisma.tourMaterial.create({
        data: {
          title,
          type,
          url: urlToSave,
          tour: {connect: {id: tourId}},
        },
      });
    }

    res.json(material);
  } catch {

    res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to add or update material'});
  }
};

export const getAllGuides = async (req: Request, res: Response) => {
  try {
    const guides = await prisma.guide.findMany({include: {user: true}});

    const safeGuides = guides.map(guide => ({
      id: guide.id,
      experience: guide.experience || '',
      specializations: Array.isArray(guide.specializations) ? guide.specializations : [],
      createdAt: guide.createdAt,
      updatedAt: guide.updatedAt,
      user: guide.user
        ? {
          id: guide.user.id,
          firstName: guide.user.firstName || '',
          lastName: guide.user.lastName || '',
          email: guide.user.email || '',
          profilePicUrl: guide.user.profilePicUrl || '',
          bio: guide.user.bio || '',
          role: guide.user.role || 'USER',
        }
        : null,
    }));
    res.json(safeGuides);
  } catch {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({message: 'Failed to load guides'});
  }
};
