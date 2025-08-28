import {HTTP_STATUS_BAD_REQUEST} from 'src/constants/http';
import {logger} from 'src/utils/logger';
import {NextFunction, Request, Response} from 'express';
import {ZodType} from 'zod';

export const validate = (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    logger.error('Validation error:', err);

    return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'Validation error'});
  }
};
