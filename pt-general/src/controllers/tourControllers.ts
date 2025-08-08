import {prisma} from 'src/db/prisma';
import {DifficultyLevel} from 'src/generated/prisma';
import {Request, Response} from 'express';

const HTTP_STATUS_NOT_FOUND = 404;
const HTTP_STATUS_BAD_REQUEST = 400;
const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;

// Get all tours
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

// Get tour by ID
export const getTourById = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const tour = await prisma.tour.findUnique({
      where: {id: Number(id)},
      include: {guide: true},
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

// Create new tour
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

    // Проверка обязательных полей
    if (!title || !description || !region || !difficulty || !price || !guideId || !program) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'Missing required fields'});
    }

    // Проверка на допустимые значения enum
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

// Update tour
export const updateTour = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const data = req.body;
    const updated = await prisma.tour.update({
      where: {id: Number(id)},
      data,
    });
    res.json(updated);
  } catch {
    return res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to update tour'});
  }
};

// Delete tour
export const deleteTour = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    await prisma.tour.delete({where: {id: Number(id)}});
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
    const {id} = req.params;
    const {categories} = req.body;

    const updatedTour = await prisma.tour.update({
      where: {id: Number(id)},
      data: {
        categories: {
          set: [], // Сбрасываем текущие
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
    const {id} = req.params;
    const {tags} = req.body;

    const updatedTour = await prisma.tour.update({
      where: {id: Number(id)},
      data: {
        tags: {
          set: [],
          connect: tags.map((tagId: number) => ({id: tagId})),
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
    const {id} = req.params;
    const {dates} = req.body;

    if (!Array.isArray(dates)) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'Invalid dates array'});
    }

    const dateEntries = dates.map((d) => ({date: new Date(d.date)}));

    const updatedTour = await prisma.tour.update({
      where: {id: Number(id)},
      data: {dates: {create: dateEntries}},
      include: {dates: true},
    });

    res.json(updatedTour);
  } catch {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to add dates'});
  }
};

// PATCH /api/tours/:id/photos
export const addTourPhotos = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const {photos} = req.body;

    const updatedTour = await prisma.tour.update({
      where: {id: Number(id)},
      data: {photos: {create: photos.map((url: string) => ({url}))}},
    });

    res.json(updatedTour);
  } catch {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to add photos'});
  }
};

// PATCH /api/tours/:id/videos
export const addTourVideos = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const {videos} = req.body;

    const updatedTour = await prisma.tour.update({
      where: {id: Number(id)},
      data: {videos: {create: videos.map((url: string) => ({url}))}},
    });

    res.json(updatedTour);
  } catch {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to add videos'});
  }
};

// PATCH /api/tours/:id/materials

type MaterialData = {
  title: string;
  url: string;
  type: string;
};

export const addTourMaterials = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const {materials} = req.body;

    const updatedTour = await prisma.tour.update({
      where: {id: Number(id)},
      data: {
        materials: {
          create: materials.map((m: MaterialData) => ({
            title: m.title,
            url: m.url,
            type: m.type,
          })),
        },
      },
      include: {materials: true},
    });

    res.json(updatedTour);
  } catch {

    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Failed to add materials'});
  }
};

