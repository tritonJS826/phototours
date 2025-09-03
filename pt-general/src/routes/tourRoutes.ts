import {
  addOrUpdateTourMaterial,
  addTourDates,
  addTourMaterials,
  addTourPhotos,
  addTourVideos,
  createTour,
  deleteMaterial,
  deleteTour,
  getAllGuides,
  getAllTours,
  getTourById,
  updateTour,
  updateTourCategories,
  updateTourTags,
} from 'src/controllers/tourControllers';
import {
  addOrUpdateTourMaterialSchema,
  addTourDatesSchema,
  addTourMaterialSchema,
  createTourSchema,
  updateTourTagsSchema,
} from 'src/controllers/validators/zodTourSchemas';
import {upload} from 'src/middlewares/upload';
import {validate} from 'src/middlewares/validate';
import {Router} from 'express';

export const tourRoutes = Router();

tourRoutes.get('/', getAllTours);
tourRoutes.get('/guides', getAllGuides);
tourRoutes.get('/:id', getTourById);
tourRoutes.post('/', validate(createTourSchema), createTour);
tourRoutes.put('/:id', updateTour);
tourRoutes.delete('/:id', deleteTour);
tourRoutes.delete('/materials/:id', deleteMaterial);

tourRoutes.patch('/:id/categories', updateTourCategories);
tourRoutes.patch('/:id/tags', validate(updateTourTagsSchema), updateTourTags);
tourRoutes.patch('/:id/dates', validate(addTourDatesSchema), addTourDates);
tourRoutes.patch('/:id/photos', upload.array('file'), addTourPhotos);
tourRoutes.patch('/:id/videos', upload.single('file'), addTourVideos);
tourRoutes.patch('/:id/materials', upload.single('file'), validate(addTourMaterialSchema), addTourMaterials);
tourRoutes.post('/:id/materials', upload.single('file'), validate(addOrUpdateTourMaterialSchema), addOrUpdateTourMaterial);

