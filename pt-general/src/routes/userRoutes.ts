import {createUser} from 'src/controllers/userControllers';
import {Router} from 'express';

export const userRoutes = Router();

userRoutes.post('/', createUser);

