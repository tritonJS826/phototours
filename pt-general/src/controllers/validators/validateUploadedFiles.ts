export const validateUploadedFiles = (
  files: Express.Multer.File[] | { [fieldname: string]: Express.Multer.File[] } | undefined,
) => {
  let fileArray: Express.Multer.File[] = [];

  if (Array.isArray(files)) {
    fileArray = files;
  } else if (files && typeof files === 'object') {

    fileArray = Object.values(files).flat();
  }

  if (!fileArray.length) {
    throw new Error('No files uploaded');
  }

  return fileArray;
};
