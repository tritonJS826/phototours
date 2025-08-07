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
import {authMiddleware, roleMiddleware} from 'src/middleware/authMiddleware';
import {Router} from 'express';

export const tourRoutes = Router();

// Public routes (no authentication required)
tourRoutes.get('/', getAllTours);
tourRoutes.get('/:id', getTourById);

// Protected routes (require authentication and GUIDE role)
tourRoutes.post('/', authMiddleware, roleMiddleware(['GUIDE']), createTour);
tourRoutes.put('/:id', authMiddleware, roleMiddleware(['GUIDE']), updateTour);
tourRoutes.delete('/:id', authMiddleware, roleMiddleware(['GUIDE']), deleteTour);
tourRoutes.patch('/:id/categories', authMiddleware, roleMiddleware(['GUIDE']), updateTourCategories);
tourRoutes.patch('/:id/tags', authMiddleware, roleMiddleware(['GUIDE']), updateTourTags);
tourRoutes.patch('/:id/dates', authMiddleware, roleMiddleware(['GUIDE']), addTourDates);
tourRoutes.patch('/:id/photos', authMiddleware, roleMiddleware(['GUIDE']), addTourPhotos);
tourRoutes.patch('/:id/videos', authMiddleware, roleMiddleware(['GUIDE']), addTourVideos);
tourRoutes.patch('/:id/materials', authMiddleware, roleMiddleware(['GUIDE']), addTourMaterials);