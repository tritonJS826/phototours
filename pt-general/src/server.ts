import {env} from 'src/config/env';
import {adminUserPhotos} from 'src/routes/adminUserPhotos';
import {adminUsers} from 'src/routes/adminUsers';
import {articleRoutes} from 'src/routes/articleRoutes';
import {authRouter} from 'src/routes/auth';
import {bankAccountRoutes} from 'src/routes/bankAccountRoutes';
import galleryRouter from 'src/routes/gallery';
import {galleryRoutes} from 'src/routes/galleryRoutes';
import {notificationRoutes} from 'src/routes/notificationRoutes';
import {publicGallery} from 'src/routes/publicGallery';
import {tourRoutes} from 'src/routes/tourRoutes';
import {userRoutes} from 'src/routes/userRoutes';
import {logger} from 'src/utils/logger';
import cors from 'cors';
import express, {Express} from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const CODE_200 = 200;
const CODE_204 = 204;

const app: Express = express();

app.use(
  cors({
    origin: env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
      'X-User-Id',
      'x-user-id',
    ],
  }),
);

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', env.CORS_ORIGIN);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
      'X-User-Id',
      'x-user-id',
    ].join(', '),
  );
  if (req.method === 'OPTIONS') {
    res.sendStatus(CODE_204);

    return;
  }
  next();
});

app.get('/health', (_req, res) => {
  res.status(CODE_200).send('OK');
});

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Photo Tours API',
      version: '1.0.0',
      description: 'Backend API for Photo Tours application.',
      license: {name: 'MIT', url: 'https://opensource.org/licenses/MIT'},
    },
    servers: [{url: `http://localhost:${env.SERVER_PORT}`, description: 'Development server'}],
    components: {securitySchemes: {bearerAuth: {type: 'http', scheme: 'bearer', bearerFormat: 'JWT'}}},
  },
  apis: ['./src/server.ts', './src/routes/*.ts'],
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (_req, res) => {
  res.send('Express + TypeScript Server');
});

app.get('/test', (_req, res) => {
  res.json({message: 'Test endpoint works!'});
});

app.use(['/tours', '/general/tours'], tourRoutes);
app.use('/users', userRoutes);
app.use('/notifications', notificationRoutes);
app.use('/bank-accounts', bankAccountRoutes);
app.use('/articles', articleRoutes);
app.use('/auth', authRouter);
app.use('/gallery', galleryRoutes);
app.use('/', galleryRouter);

app.use('/admin/users', adminUsers);
app.use('/admin/photos', adminUserPhotos);
app.use('/public/gallery', publicGallery);

app.listen(env.SERVER_PORT, () => {
  logger.info(`Server is running at http://localhost:${env.SERVER_PORT}`);
  logger.info(`API documentation available at http://localhost:${env.SERVER_PORT}/api-docs`);
});
