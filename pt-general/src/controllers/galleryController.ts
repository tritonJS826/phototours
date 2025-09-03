import {prisma} from 'src/db/prisma';
import {AuthRequest} from 'src/middlewares/auth';
import {CloudinaryUploadResult, destroy, signedDownloadUrl, uploadStream} from 'src/utils/cloudinary';
import {Response} from 'express';

const HTTP_OK = 200;
const HTTP_CREATED = 201;
const HTTP_BAD = 400;
const HTTP_FORBIDDEN = 403;
const HTTP_NOT_FOUND = 404;
const HTTP_SERVER = 500;

const MAX_FILES = 10;
const FOLDER_USER = 'phototours/users';
const FOLDER_ADMIN = 'phototours/admin';

function isAdmin(role: string | undefined): boolean {
  return role === 'ADMIN';
}

export async function listMy(req: AuthRequest, res: Response) {
  try {
    const userId = Number(req.user?.userId);
    const rows = await prisma.galleryImage.findMany({
      where: {userId},
      orderBy: {createdAt: 'desc'},
    });

    return res.status(HTTP_OK).json(rows);
  } catch {
    return res.status(HTTP_SERVER).json({error: 'Failed'});
  }
}

export async function listAll(req: AuthRequest, res: Response) {
  try {
    if (!isAdmin(req.user?.role)) {
      return res.status(HTTP_FORBIDDEN).json({error: 'Forbidden'});
    }

    const rows = await prisma.galleryImage.findMany({orderBy: {createdAt: 'desc'}});

    return res.status(HTTP_OK).json(rows);
  } catch {
    return res.status(HTTP_SERVER).json({error: 'Failed'});
  }
}

export async function removeMine(req: AuthRequest, res: Response) {
  try {
    const id = Number(req.params.id);
    const userId = Number(req.user?.userId);

    const row = await prisma.galleryImage.findFirst({where: {id, userId}});
    if (!row) {
      return res.status(HTTP_NOT_FOUND).json({error: 'Not found'});
    }

    await destroy(row.publicId);
    await prisma.galleryImage.delete({where: {id}});

    return res.status(HTTP_OK).json({ok: true});
  } catch {
    return res.status(HTTP_SERVER).json({error: 'Failed'});
  }
}

export async function removeAny(req: AuthRequest, res: Response) {
  try {
    if (!isAdmin(req.user?.role)) {
      return res.status(HTTP_FORBIDDEN).json({error: 'Forbidden'});
    }

    const id = Number(req.params.id);
    const row = await prisma.galleryImage.findUnique({where: {id}});
    if (!row) {
      return res.status(HTTP_NOT_FOUND).json({error: 'Not found'});
    }

    await destroy(row.publicId);
    await prisma.galleryImage.delete({where: {id}});

    return res.status(HTTP_OK).json({ok: true});
  } catch {
    return res.status(HTTP_SERVER).json({error: 'Failed'});
  }
}

export async function downloadLink(req: AuthRequest, res: Response) {
  try {
    if (!isAdmin(req.user?.role)) {
      return res.status(HTTP_FORBIDDEN).json({error: 'Forbidden'});
    }

    const id = Number(req.params.id);
    const row = await prisma.galleryImage.findUnique({where: {id}});
    if (!row) {
      return res.status(HTTP_NOT_FOUND).json({error: 'Not found'});
    }

    const url = signedDownloadUrl(row.publicId);

    return res.status(HTTP_OK).json({url});
  } catch {
    return res.status(HTTP_SERVER).json({error: 'Failed'});
  }
}

export async function uploadMany(req: AuthRequest, res: Response) {
  try {
    const userId = Number(req.user?.userId);

    const typed = req as unknown as { files?: Express.Multer.File[] };
    const files = Array.isArray(typed.files) ? typed.files : [];
    const count = files.length;

    if (count === 0) {
      return res.status(HTTP_BAD).json({error: 'No files'});
    }
    if (count > MAX_FILES) {
      return res.status(HTTP_BAD).json({error: 'Too many files'});
    }

    const folder = isAdmin(req.user?.role) ? FOLDER_ADMIN : FOLDER_USER;
    const saved: { id: number }[] = [];

    for (const f of files) {
      const result: CloudinaryUploadResult = await new Promise((resolve, reject) => {
        const stream = uploadStream(folder);
        stream.on('error', reject);
        stream.on('finish', () => resolve((stream as unknown as { result: CloudinaryUploadResult }).result));
        stream.end(f.buffer);
      });

      const row = await prisma.galleryImage.create({
        data: {
          userId,
          publicId: result.public_id,
          url: result.secure_url,
          bytes: result.bytes,
          width: result.width ?? 0,
          height: result.height ?? 0,
          format: result.format ?? '',
        },
        select: {id: true},
      });

      saved.push(row);
    }

    return res.status(HTTP_CREATED).json({ids: saved.map(x => x.id)});
  } catch {
    return res.status(HTTP_SERVER).json({error: 'Failed'});
  }
}
