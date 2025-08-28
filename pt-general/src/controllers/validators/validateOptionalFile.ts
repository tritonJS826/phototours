export const validateOptionalFile = (file: Express.Multer.File | undefined) => {
  if (
    file && !file.mimetype.startsWith('application')
    && !file.mimetype.startsWith('image')
    && !file.mimetype.startsWith('video')) {
    throw new Error('Invalid file type');
  }

  return file;
};
