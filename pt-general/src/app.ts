import {env} from 'src/config/env';
import {articleRoutes} from 'src/routes/articleRoutes';
import {authRouter} from 'src/routes/auth';
import {bankAccountRoutes} from 'src/routes/bankAccountRoutes';
import {notificationRoutes} from 'src/routes/notificationRoutes';
import {tourRoutes} from 'src/routes/tourRoutes';
import {userRoutes} from 'src/routes/userRoutes';
import cors from 'cors';
import express, {Express} from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const HTTP_OK = 200;
const HTTP_NO_CONTENT = 204;

const app: Express = express();

app.use(cors({
  origin: env.CORS_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
}));

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', env.CORS_ORIGIN);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(HTTP_NO_CONTENT);

    return;
  }
  next();
});

app.get('/health', (_req, res) => {
  res.status(HTTP_OK).send('OK');
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

app.use('/tours', tourRoutes);
app.use('/users', userRoutes);
app.use('/notifications', notificationRoutes);
app.use('/bank-accounts', bankAccountRoutes);
app.use('/articles', articleRoutes);
app.use('/auth', authRouter);

export {app};
