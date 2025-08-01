import {
  addTourDates,
  addTourMaterials,
  addTourPhotos,
  addTourVideos,
  createTour,
  deleteTour,
  getAllTours,
  getTourById,
  updateTour,
  updateTourCategories,
  updateTourTags,
} from 'src/controllers/tourControllers';
import {Router} from 'express';

export const tourRoutes = Router();

tourRoutes.get('/', getAllTours);
tourRoutes.get('/:id', getTourById);
tourRoutes.post('/', createTour);
tourRoutes.put('/:id', updateTour);
tourRoutes.delete('/:id', deleteTour);

tourRoutes.patch('/:id/categories', updateTourCategories);
tourRoutes.patch('/:id/tags', updateTourTags);
tourRoutes.patch('/:id/dates', addTourDates);
tourRoutes.patch('/:id/photos', addTourPhotos);
tourRoutes.patch('/:id/videos', addTourVideos);
tourRoutes.patch('/:id/materials', addTourMaterials);
