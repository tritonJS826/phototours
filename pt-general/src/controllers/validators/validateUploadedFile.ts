export const validateUploadedFile = (file: Express.Multer.File | undefined) => {
  if (!file) {
    throw new Error('File is required');
  }

  return file;
};
