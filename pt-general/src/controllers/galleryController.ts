import {
  getSignaturePayload,
  listMyImages,
  listPublicImages,
  removeMyImage,
  saveImageMeta,
} from 'src/services/galleryService';
import {Request, Response} from 'express';

const CODE_200 = 200;
const CODE_201 = 201;
const CODE_400 = 400;
const ZERO = 0;
const SEC = 1000;

export function getUploadSignature(_req: Request, res: Response) {
  const payload = getSignaturePayload();
  res.status(CODE_200).json(payload);
}

export async function confirmUpload(req: Request, res: Response) {
  try {
    const headerUserId = req.header('x-user-id');
    const bodyUserId = req.body?.userId;
    const userId = Number(typeof headerUserId === 'string' ? headerUserId : bodyUserId);

    const publicId = req.body?.publicId as string | undefined;
    const bytes = Number(req.body?.bytes);
    const width = Number(req.body?.width);
    const height = Number(req.body?.height);
    const format = typeof req.body?.format === 'string' ? (req.body.format as string) : undefined;
    const uploadedAtRaw = Number(req.body?.uploadedAt);
    const uploadedAt = Number.isInteger(uploadedAtRaw) && uploadedAtRaw > ZERO
      ? uploadedAtRaw
      : Math.floor(Date.now() / SEC);

    const hasUser = Number.isInteger(userId) && userId > ZERO;
    const hasId = typeof publicId === 'string' && publicId.length > ZERO;
    const hasBytes = Number.isInteger(bytes) && bytes > ZERO;

    if (!(hasUser && hasId && hasBytes)) {
      res.status(CODE_400).json({error: 'Invalid payload'});

      return;
    }

    const secureUrl = typeof req.body?.secureUrl === 'string' ? req.body.secureUrl : undefined;

    const item = await saveImageMeta({
      userId,
      publicId,
      bytes,
      width: Number.isFinite(width) ? width : undefined,
      height: Number.isFinite(height) ? height : undefined,
      format,
      uploadedAt,
      secureUrl,
    });

    res.status(CODE_201).json(item);
  } catch (e) {
    res.status(CODE_400).json({error: e instanceof Error ? e.message : String(e)});
  }
}

export async function getMyGallery(req: Request, res: Response) {
  const headerUserId = req.header('x-user-id');
  const userId = Number(typeof headerUserId === 'string' ? headerUserId : req.query.userId);
  const ok = Number.isInteger(userId) && userId > ZERO;
  if (!ok) {
    res.status(CODE_400).json({error: 'Invalid user id'});

    return;
  }
  const rows = await listMyImages(userId);
  res.status(CODE_200).json(rows);
}

export async function getPublicGallery(req: Request, res: Response) {
  const idRaw = req.params.userId;
  const userId = Number(idRaw);
  const ok = Number.isInteger(userId) && userId > ZERO;
  if (!ok) {
    res.status(CODE_400).json({error: 'Invalid user id'});

    return;
  }
  const rows = await listPublicImages(userId);
  res.status(CODE_200).json(rows);
}

export async function deleteMyImage(req: Request, res: Response) {
  const headerUserId = req.header('x-user-id');
  const userId = Number(typeof headerUserId === 'string' ? headerUserId : req.query.userId);
  const publicId = String(req.query.publicId ?? '');
  const ok = Number.isInteger(userId) && userId > ZERO && publicId.length > ZERO;
  if (!ok) {
    res.status(CODE_400).json({error: 'Invalid params'});

    return;
  }
  const done = await removeMyImage(userId, publicId);
  res.status(CODE_200).json({deleted: done});
}
