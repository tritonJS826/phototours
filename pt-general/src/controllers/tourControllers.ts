import {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_CREATED,
  HTTP_STATUS_INTERNAL_SERVER_ERROR,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_OK,
} from 'src/constants/http';
import {getMaterialUrl} from 'src/controllers/helpers/getMaterialUrl';
import {GuideWithUser, toSafeGuide} from 'src/controllers/mappers/toSafeGuide';
import {validateOptionalFile} from 'src/controllers/validators/validateOptionalFile';
import {validateUploadedFile} from 'src/controllers/validators/validateUploadedFile';
import {validateUploadedFiles} from 'src/controllers/validators/validateUploadedFiles';
import {validateUploadedVideo} from 'src/controllers/validators/validateUploadedVideo';
import {prisma} from 'src/db/prisma';
import {logger} from 'src/utils/logger';
import {Request, Response} from 'express';

const HTTP = {
  NOT_FOUND: 404,
  INTERNAL: 500,
} as const;

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
  } catch (error) {
    logger.error('Failed to fetch tours', error);

    return res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to fetch tours'});
  }
};

export const getTourByIdOrSlug = async (req: Request, res: Response) => {
  try {
    const idOrSlug = String(req.params.id);
    const isNumericId = /^\d+$/.test(idOrSlug);

    const tour = await prisma.tour.findUnique({
      where: isNumericId ? {id: Number(idOrSlug)} : {slug: idOrSlug},
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
      return res.status(HTTP.NOT_FOUND).json({message: 'Tour not found'});
    }

    res.json(tour);
  } catch (error) {
    logger.error('Failed to fetch tour', error);

    return res.status(HTTP.INTERNAL).json({error: 'Failed to fetch tour'});
  }
};

export const createTour = async (req: Request, res: Response) => {
  try {
    const newTour = await prisma.tour.create({data: req.body});

    return res.status(HTTP_STATUS_CREATED).json(newTour);
  } catch (error) {
    logger.error('Failed to create tour', error);

    return res
      .status(HTTP_STATUS_BAD_REQUEST)
      .json({error: 'Failed to create tour'});
  }
};

export const updateTour = async (req: Request, res: Response) => {
  try {
    const updated = await prisma.tour.update({
      where: {id: Number(req.params.id)},
      data: req.body,
    });
    res.json(updated);
  } catch (error) {
    logger.error('Failed to update tour', error);

    return res
      .status(HTTP_STATUS_NOT_FOUND)
      .json({error: 'Failed to update tour'});
  }
};

export const deleteTour = async (req: Request, res: Response) => {
  try {
    const deletedTour = await prisma.tour.delete({where: {id: Number(req.params.id)}});

    res.status(HTTP_STATUS_OK).json(deletedTour);
  } catch (err) {
    logger.error('Failed to delete tour', err);

    return res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to delete tour'});
  }
};

export const updateTourCategories = async (req: Request, res: Response) => {
  try {
    const updatedTour = await prisma.tour.update({
      where: {id: Number(req.params.id)},
      data: {
        categories: {
          set: [],
          connect: req.body.categories.map((catId: number) => ({id: catId})),
        },
      },
    });

    res.json(updatedTour);
  } catch (error) {
    logger.error('Failed to update categories', error);
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to update categories'});
  }
};

export const updateTourTags = async (req: Request, res: Response) => {
  try {
    const updatedTour = await prisma.tour.update({
      where: {id: Number(req.params.id)},
      data: {
        tags: {
          set: [],
          connectOrCreate: req.body.tags.map((tagName: string) => ({
            where: {name: tagName},
            create: {name: tagName},
          })),
        },
      },
      include: {tags: true},
    });
    res.json(updatedTour);
  } catch (error) {
    logger.error('Failed to update tags', error);
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to update tags'});
  }
};

export const addTourDates = async (req: Request, res: Response) => {
  try {
    const tourId = Number(req.params.id);
    const tourDates: Date[] = req.body.dates.map((d: string) => new Date(d));

    await prisma.tourDate.deleteMany({where: {tourId}});

    if (tourDates.length > 0) {
      await prisma.tourDate.createMany({data: tourDates.map((date) => ({date, tourId}))});
    }
    res.json({message: 'Tour dates updated successfully'});
  } catch (err) {
    logger.error('Failed to update tour dates:', err);
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to update tour dates'});
  }
};

export const addTourPhotos = async (req: Request, res: Response) => {
  try {
    const photos = await Promise.all(

      validateUploadedFiles(req.files).map(file =>
        prisma.photo.create({
          data: {
            tourId: Number(req.params.id),
            url: file.path,
          },
        }),
      ),
    );

    res.status(HTTP_STATUS_CREATED).json({photos});
  } catch (err) {
    logger.error('Failed to add photos:', err);
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to add photos'});
  }
};

export const addTourVideos = async (req: Request, res: Response) => {
  try {
    const file = validateUploadedVideo(req.file);
    const updatedTour = await prisma.tour.update({
      where: {id: Number(req.params.id)},
      data: {videos: {create: {url: file.path}}},
    });
    res.json({
      message: 'Video uploaded and added successfully',
      tour: updatedTour,
    });
  } catch (err) {
    logger.error('Failed to add video:', err);
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to add video'});
  }
};

export const addTourMaterials = async (req: Request, res: Response) => {
  try {
    const updatedTour = await prisma.tour.update({
      where: {id: Number(req.params.id)},
      data: {
        materials: {
          create: {
            title: req.body.title,
            type: req.body.type,
            url: validateUploadedFile(req.file).path,
          },
        },
      },
      include: {materials: true},
    });
    res.json(updatedTour);
  } catch (err) {
    logger.error('Failed to add material:', err);
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to add material'});
  }
};

export const deleteMaterial = async (req: Request, res: Response) => {
  try {
    const deletedMaterial = await prisma.tourMaterial.delete({where: {id: Number(req.params.id)}});
    res.json(deletedMaterial);
  } catch (err) {
    logger.error('Failed to delete material:', err);
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({message: 'Material not found'});
  }
};

export const addOrUpdateTourMaterial = async (req: Request, res: Response) => {
  try {
    const file = validateOptionalFile(req.file);
    const urlToSave = await getMaterialUrl(file, req.body.id ? Number(req.body.id) : undefined);

    const material = req.body.id
      ? await prisma.tourMaterial.update({
        where: {id: Number(req.body.id)},
        data: {
          title: req.body.title,
          type: req.body.type,
          url: urlToSave,
        },
      })
      : await prisma.tourMaterial.create({
        data: {
          title: req.body.title,
          type: req.body.type,
          url: urlToSave,
          tour: {connect: {id: Number(req.params.id)}},
        },
      });
    res.json(material);
  } catch (err) {
    logger.error('Failed to add or update material:', err);
    res
      .status(HTTP_STATUS_NOT_FOUND)
      .json({error: 'Failed to add or update material'});
  }
};

export const getAllGuides = async (req: Request, res: Response) => {
  try {
    const guides: GuideWithUser[] = await prisma.guide.findMany({include: {user: true}});
    const safeGuides = guides.map(toSafeGuide);
    res.json(safeGuides);
  } catch (error) {
    logger.error('Failed to load guides', error);
    res.status(HTTP_STATUS_NOT_FOUND).json({message: 'Failed to load guides'});
  }
};
