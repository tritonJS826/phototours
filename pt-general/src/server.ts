import 'dotenv/config';
import {app as baseApp} from 'src/app';
import {env} from 'src/config/env';
import {logger} from 'src/utils/logger';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const HTTP_OK = 200;
const HTTP_NO_CONTENT = 204;

const app = baseApp;

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

app.options('*', (_req, res) => {
  res.sendStatus(HTTP_NO_CONTENT);
});

app.listen(env.SERVER_PORT, () => {
  logger.info(`Server is running at http://localhost:${env.SERVER_PORT}`);
  logger.info(`API documentation available at http://localhost:${env.SERVER_PORT}/api-docs`);
});
