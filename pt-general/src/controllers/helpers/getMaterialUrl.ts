import {prisma} from 'src/db/prisma';

export const getMaterialUrl = async (
  file: Express.Multer.File | undefined,
  materialId?: number,
) => {
  if (file) {
    return file.path;
  }

  if (materialId) {
    const existing = await prisma.tourMaterial.findUnique({where: {id: materialId}});
    if (!existing) {
      throw new Error('Material not found');
    }

    return existing.url;
  }

  throw new Error('File is required');
};
