import {prisma} from 'src/db/prisma';
import {DifficultyLevel, MaterialType} from 'src/generated/prisma';
import {Prisma} from '@prisma/client';
import {Request, Response} from 'express';

const HTTP_STATUS_NOT_FOUND = 404;
const HTTP_STATUS_BAD_REQUEST = 400;
const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;
const ZERO = 0;

function isDifficultyLevel(v: string): v is DifficultyLevel {
  const set = new Set<string>(Object.values(DifficultyLevel));

  return set.has(v);
}

function isMaterialType(v: string): v is MaterialType {
  const set = new Set<string>(Object.values(MaterialType));

  return set.has(v);
}

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
    res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to fetch tours'});
  }
};

export const getTourById = async (req: Request, res: Response) => {
  try {
    const key = String(req.params.id);
    const isNumeric = /^[0-9]+$/.test(key);
    const where = isNumeric ? {id: Number(key)} : {slug: key};
    const tour = await prisma.tour.findUnique({
      where,
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
      res.status(HTTP_STATUS_NOT_FOUND).json({message: 'Tour not found'});

      return;
    }
    res.json(tour);
  } catch {
    res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to fetch tour'});
  }
};

export const createTour = async (req: Request, res: Response) => {
  try {
    const title = typeof req.body.title === 'string' ? req.body.title : '';
    const description =
      typeof req.body.description === 'string' ? req.body.description : '';
    const diffRaw =
      typeof req.body.difficulty === 'string' ? req.body.difficulty : '';
    const programValue: Prisma.InputJsonValue =
      typeof req.body.program === 'object' && req.body.program !== null
        ? (req.body.program as Prisma.InputJsonValue)
        : {};

    const priceNum =
      typeof req.body.price === 'number'
        ? req.body.price
        : Number(req.body.price);
    const price = Number.isFinite(priceNum) ? priceNum : undefined;

    const startLocation =
      typeof req.body.startLocation === 'string'
        ? req.body.startLocation
        : undefined;
    const endLocation =
      typeof req.body.endLocation === 'string'
        ? req.body.endLocation
        : undefined;
    const durationDays =
      typeof req.body.durationDays === 'number'
        ? req.body.durationDays
        : undefined;
    const minAge =
      typeof req.body.minAge === 'number' ? req.body.minAge : undefined;
    const coverUrl =
      typeof req.body.coverUrl === 'string' ? req.body.coverUrl : undefined;

    const languages =
      Array.isArray(req.body.languages)
        ? (req.body.languages as unknown[])
          .filter((x: unknown): x is string => typeof x === 'string')
        : undefined;
    const availableMonths =
      Array.isArray(req.body.availableMonths)
        ? (req.body.availableMonths as unknown[])
          .filter((x: unknown): x is string => typeof x === 'string')
        : undefined;

    const guideIdRaw =
      typeof req.body.guideId === 'number'
        ? req.body.guideId
        : Number(req.body.guideId);
    const guideIdOk = Number.isInteger(guideIdRaw) && guideIdRaw > ZERO;

    const okTitle = title.trim().length > ZERO;
    const okDesc = description.trim().length > ZERO;
    const okDiff = isDifficultyLevel(diffRaw);

    if (!(okTitle && okDesc && okDiff && guideIdOk)) {
      res
        .status(HTTP_STATUS_BAD_REQUEST)
        .json({error: 'Missing or invalid fields'});

      return;
    }

    const data: Prisma.TourCreateInput = {
      title,
      description,
      difficulty: diffRaw as DifficultyLevel,
      program: programValue,
      price,
      startLocation,
      endLocation,
      durationDays,
      minAge,
      coverUrl,
      languages,
      availableMonths,
      guide: {connect: {id: guideIdRaw}},
    };

    const newTour = await prisma.tour.create({data});
    res.status(HTTP_STATUS_CREATED).json(newTour);
  } catch {
    res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to create tour'});
  }
};

export const updateTour = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data: Prisma.TourUpdateInput = {};

    if (typeof req.body.title === 'string') {
      data.title = req.body.title;
    }
    if (typeof req.body.description === 'string') {
      data.description = req.body.description;
    }
    if (
      typeof req.body.difficulty === 'string' &&
      isDifficultyLevel(req.body.difficulty)
    ) {
      data.difficulty = req.body.difficulty as DifficultyLevel;
    }

    if (
      typeof req.body.program === 'object' &&
      req.body.program !== null
    ) {
      data.program = req.body.program as Prisma.InputJsonValue;
    }

    if (typeof req.body.price === 'number') {
      data.price = req.body.price;
    }
    if (typeof req.body.startLocation === 'string') {
      data.startLocation = req.body.startLocation;
    }
    if (typeof req.body.endLocation === 'string') {
      data.endLocation = req.body.endLocation;
    }
    if (typeof req.body.durationDays === 'number') {
      data.durationDays = req.body.durationDays;
    }
    if (typeof req.body.minAge === 'number') {
      data.minAge = req.body.minAge;
    }
    if (typeof req.body.coverUrl === 'string') {
      data.coverUrl = req.body.coverUrl;
    }

    if (Array.isArray(req.body.languages)) {
      const arr = (req.body.languages as unknown[])
        .filter((x: unknown): x is string => typeof x === 'string');
      data.languages = arr;
    }
    if (Array.isArray(req.body.availableMonths)) {
      const arr = (req.body.availableMonths as unknown[])
        .filter((x: unknown): x is string => typeof x === 'string');
      data.availableMonths = arr;
    }

    if (Object.prototype.hasOwnProperty.call(req.body, 'guideId')) {
      const raw =
        typeof req.body.guideId === 'number'
          ? req.body.guideId
          : Number(req.body.guideId);
      if (Number.isInteger(raw) && raw > ZERO) {
        data.guide = {connect: {id: raw}};
      }
    }

    const updated = await prisma.tour.update({
      where: {id},
      data,
    });
    res.json(updated);
  } catch {
    res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to update tour'});
  }
};

export const deleteTour = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await prisma.$transaction(async tx => {
      await tx.tour.update({
        where: {id},
        data: {categories: {set: []}, tags: {set: []}},
      });
      await tx.photo.deleteMany({where: {tourId: id}});
      await tx.video.deleteMany({where: {tourId: id}});
      await tx.tourDate.deleteMany({where: {tourId: id}});
      await tx.review.deleteMany({where: {tourId: id}});
      await tx.tourMaterial.deleteMany({where: {tourId: id}});
      await tx.booking.deleteMany({where: {tourId: id}});
      await tx.tour.delete({where: {id}});
    });
    res.json({message: 'Tour deleted successfully'});
  } catch (err) {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({
      error: 'Failed to delete tour',
      details: err instanceof Error ? err.message : String(err),
    });
  }
};

export const updateTourCategories = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const raw: unknown[] = Array.isArray(req.body.categories)
      ? req.body.categories
      : [];
    const ids: number[] = raw
      .map((n: unknown) => Number(n))
      .filter((n: number) => Number.isInteger(n) && n > ZERO);
    const connect = ids.map((catId: number) => ({id: catId}));
    const updatedTour = await prisma.tour.update({
      where: {id},
      data: {categories: {set: [], connect}},
      include: {categories: true},
    });
    res.json(updatedTour);
  } catch {
    res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to update categories'});
  }
};

export const updateTourTags = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const raw: unknown[] = Array.isArray(req.body.tags) ? req.body.tags : [];
    const names: string[] = raw
      .filter((x: unknown): x is string => typeof x === 'string')
      .map((x: string) => x.trim())
      .filter((x: string) => x.length > ZERO);
    const connectOrCreate = names.map((name: string) => ({
      where: {name},
      create: {name},
    }));
    const updatedTour = await prisma.tour.update({
      where: {id},
      data: {tags: {set: [], connectOrCreate}},
      include: {tags: true},
    });
    res.json(updatedTour);
  } catch {
    res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to update tags'});
  }
};

export const addTourDates = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const raw: unknown[] = Array.isArray(req.body.dates) ? req.body.dates : [];
    const parsed: Date[] = raw.map((d: unknown) => new Date(String(d)));
    const valid: Date[] = parsed.filter(
      (dt: Date) => Number.isNaN(dt.getTime()) === false,
    );
    await prisma.tourDate.deleteMany({where: {tourId: id}});
    if (valid.length > ZERO) {
      await prisma.tourDate.createMany({data: valid.map((date: Date) => ({date, tourId: id}))});
    }
    res.json({message: 'Tour dates updated successfully'});
  } catch {
    res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to update tour dates'});
  }
};

export const addTourPhotos = async (req: Request, res: Response) => {
  try {
    const ok =
      Array.isArray(req.files) &&
      (req.files as Express.Multer.File[]).length > ZERO;
    if (!ok) {
      res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'No files uploaded'});

      return;
    }
    const id = Number(req.params.id);
    const files = req.files as Express.Multer.File[];
    const photos = await Promise.all(
      files.map((f: Express.Multer.File) =>
        prisma.photo.create({data: {tourId: id, url: f.path}}),
      ),
    );
    res.status(HTTP_STATUS_CREATED).json({message: 'Photos uploaded', photos});
  } catch {
    res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to add photos'});
  }
};

export const addTourVideos = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'No video file uploaded'});

      return;
    }
    const id = Number(req.params.id);
    const url = (req.file as Express.Multer.File).path;
    const updatedTour = await prisma.tour.update({
      where: {id},
      data: {videos: {create: {url}}},
      include: {videos: true},
    });
    res.json({
      message: 'Video uploaded and added successfully',
      tour: updatedTour,
    });
  } catch {
    res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to add video'});
  }
};

export const addTourMaterials = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const title =
      typeof req.body.title === 'string' ? req.body.title : '';
    const typeRaw =
      typeof req.body.type === 'string' ? req.body.type : '';
    if (!req.file) {
      res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'File is required'});

      return;
    }
    const okTitle = title.trim().length > ZERO;
    const okType = isMaterialType(typeRaw);
    if (!(okTitle && okType)) {
      res
        .status(HTTP_STATUS_BAD_REQUEST)
        .json({error: 'Title and type are required'});

      return;
    }
    const url = (req.file as Express.Multer.File).path;
    const updatedTour = await prisma.tour.update({
      where: {id},
      data: {materials: {create: {title, type: typeRaw, url}}},
      include: {materials: true},
    });
    res.json(updatedTour);
  } catch {
    res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({error: 'Failed to add material'});
  }
};

export const deleteMaterial = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deleted = await prisma.tourMaterial.delete({where: {id}});
    res.json(deleted);
  } catch {
    res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({message: 'Material not found'});
  }
};

export const addOrUpdateTourMaterial = async (req: Request, res: Response) => {
  try {
    const tourId = Number(req.params.id);
    const idRaw = req.body.id;
    const id =
      typeof idRaw === 'number' ? idRaw : Number(idRaw);
    const title =
      typeof req.body.title === 'string' ? req.body.title : '';
    const typeRaw =
      typeof req.body.type === 'string' ? req.body.type : '';
    const okTitle = title.trim().length > ZERO;
    const okType = isMaterialType(typeRaw);
    if (!(okTitle && okType)) {
      res
        .status(HTTP_STATUS_BAD_REQUEST)
        .json({error: 'Title and type are required'});

      return;
    }
    let urlToSave = '';
    if (req.file) {
      urlToSave = (req.file as Express.Multer.File).path;
    } else {
      if (Number.isInteger(id)) {
        const existing = await prisma.tourMaterial.findUnique({where: {id}});
        if (existing) {
          urlToSave = existing.url;
        } else {
          res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'Material not found'});

          return;
        }
      } else {
        res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'File is required'});

        return;
      }
    }
    if (Number.isInteger(id)) {
      const material = await prisma.tourMaterial.update({
        where: {id},
        data: {title, type: typeRaw, url: urlToSave},
      });
      res.json(material);

      return;
    }
    const material = await prisma.tourMaterial.create({
      data: {
        title,
        type: typeRaw,
        url: urlToSave,
        tour: {connect: {id: tourId}},
      },
    });
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
    const mapped = guides.map(g => ({
      id: g.id,
      experience:
        typeof g.experience === 'string' ? g.experience : '',
      specializations: Array.isArray(g.specializations)
        ? g.specializations
        : [],
      createdAt: g.createdAt,
      updatedAt: g.updatedAt,
      user: g.user
        ? {
          id: g.user.id,
          firstName:
              typeof g.user.firstName === 'string' ? g.user.firstName : '',
          lastName:
              typeof g.user.lastName === 'string' ? g.user.lastName : '',
          email:
              typeof g.user.email === 'string' ? g.user.email : '',
          profilePicUrl:
              typeof g.user.profilePicUrl === 'string'
                ? g.user.profilePicUrl
                : '',
          bio: typeof g.user.bio === 'string' ? g.user.bio : '',
          role: g.user.role,
        }
        : null,
    }));
    res.json(mapped);
  } catch {
    res
      .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({message: 'Failed to load guides'});
  }
};
