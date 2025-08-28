import {MIN_STRING_LENGTH} from 'src/constants/validation';
import {z} from 'zod';

export const createTourSchema = z.object({
  title: z.string().min(MIN_STRING_LENGTH),
  description: z.string().min(MIN_STRING_LENGTH),
  region: z.string().min(MIN_STRING_LENGTH),
  difficulty: z.enum(['BEGINNER', 'EXPERIENCED', 'PRO']),
  price: z.number().positive(),
  program: z.any(),
  guideId: z.number().int(),
});

export const updateTourTagsSchema = z.object({tags: z.array(z.string().min(MIN_STRING_LENGTH, 'Tag cannot be empty'))});

export const addTourDatesSchema = z.object({
  dates: z
    .array(
      z
        .string()
        .refine((val) => !isNaN(new Date(val).getTime()), {message: 'Invalid date format'}),
    )
    .default([]),
});

export const addTourMaterialSchema = z.object({
  title: z.string().min(MIN_STRING_LENGTH, 'Title is required'),
  type: z.enum(['PDF', 'ROUTE', 'TIPS', 'VIDEO']),
});

export const addOrUpdateTourMaterialSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(MIN_STRING_LENGTH, 'Title is required'),
  type: z.enum(['PDF', 'ROUTE', 'TIPS', 'VIDEO']),
});
