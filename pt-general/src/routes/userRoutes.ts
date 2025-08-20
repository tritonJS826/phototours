import {createUser, getPublicProfile} from 'src/controllers/userControllers';
import {Router} from 'express';

export const userRoutes = Router();

userRoutes.post('/', createUser);
userRoutes.get('/:id/public', getPublicProfile);

