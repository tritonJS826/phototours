import {prisma} from 'src/db/prisma';
import {DifficultyLevel} from 'src/generated/prisma';
import {Request, Response} from 'express';

const HTTP_STATUS_NOT_FOUND = 404;
const HTTP_STATUS_BAD_REQUEST = 400;
const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;

export const getAllTours = async (req: Request, res: Response) => {
  try {
    const tours = await prisma.tour.findMany({include: {guide: true}});
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
        guide: true,
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
  try {
    await prisma.tour.delete({where: {id: Number(req.params.id)}});
    res.json({message: 'Tour deleted'});
  } catch {
    return res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to delete tour'});
  }
};

// PATCH /api/tours/:id/categories
export const updateTourCategories = async (req: Request, res: Response) => {
  try {
    const {categories} = req.body;
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
    const {tags} = req.body;
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

    if (!req.file) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'No file uploaded'});
    }
    const photo = await prisma.photo.create({
      data: {
        tourId: Number(req.params.id),
        url: req.file.path,
      },
    });

    res.status(HTTP_STATUS_CREATED).json({message: 'Photo uploaded', photo});
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
    const {id} = req.params;
    const {title, type} = req.body;
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
