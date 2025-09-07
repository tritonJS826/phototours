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
import {upload} from 'src/middlewares/upload';
import {Router} from 'express';

export const tourRoutes = Router();

tourRoutes.get('/', getAllTours);
tourRoutes.get('/guides', getAllGuides);
tourRoutes.get('/:id', getTourById);
tourRoutes.post('/', createTour);
tourRoutes.put('/:id', updateTour);
tourRoutes.delete('/:id', deleteTour);
tourRoutes.delete('/materials/:id', deleteMaterial);
tourRoutes.patch('/:id/categories', updateTourCategories);
tourRoutes.patch('/:id/tags', updateTourTags);
tourRoutes.patch('/:id/dates', addTourDates);
tourRoutes.patch('/:id/photos', upload.array('file'), addTourPhotos);
tourRoutes.patch('/:id/videos', upload.single('file'), addTourVideos);
tourRoutes.patch('/:id/materials', upload.single('file'), addTourMaterials);
tourRoutes.post('/:id/materials', upload.single('file'), addOrUpdateTourMaterial);
