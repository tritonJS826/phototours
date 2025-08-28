export const validateUploadedVideo = (file: Express.Multer.File | undefined) => {
  if (!file) {
    throw new Error('No video file uploaded');
  }
  if (!file.mimetype.startsWith('video/')) {
    throw new Error('Invalid file type, must be a video');
  }

  return file;
};
