import {env} from 'src/config/env';
import {prisma} from 'src/db/prisma';
import {articleRoutes} from 'src/routes/articleRoutes';
import {authRoutes} from 'src/routes/authRoutes';
import {bankAccountRoutes} from 'src/routes/bankAccountRoutes';
import {notificationRoutes} from 'src/routes/notificationRoutes';
import {tourRoutes} from 'src/routes/tourRoutes';
import {userRoutes} from 'src/routes/userRoutes';
import {createZohoService} from 'src/services/zohoService';
import {logger} from 'src/utils/logger.js';
import express, {Express, Request, Response} from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const CODE_500 = 500;
const CODE_400 = 400;
const CODE_204 = 204;
const NAME_SLICE_INDEX = 1;

const app: Express = express();
app.use(express.json());

const port = env.SERVER_PORT;
const CORS_ORIGIN = env.CORS_ORIGIN;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', CORS_ORIGIN);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(CODE_204);
  } else {
    next();
  }
});

app.get('/health', (_req, res) => {
  const HTTP_OK = 200;
  res.status(HTTP_OK).send('OK');
});

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Photo Tours API',
      version: '1.0.0',
      description: 'Backend API for Photo Tours application.',
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/server.ts', './src/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/test', (_req: Request, res: Response) => {
  res.json({message: 'Test endpoint works!'});
});

app.post('/users', async (req: Request, res: Response) => {
  try {
    const email = req.body.email as string;
    const name = req.body.name as string;
    const phone = (req.body.phone as string) || '';
    const company = (req.body.company as string) || '';

    const user = await prisma.user.create({
      data: {
        email,
        firstName: name.split(' ')[0] || name,
        lastName: name.split(' ').slice(NAME_SLICE_INDEX).join(' ') || '',
        password: 'test',
      },
    });

    try {
      const zohoService = createZohoService();
      const leadData = {
        First_Name: name.split(' ')[0] || name,
        Last_Name: name.split(' ').slice(NAME_SLICE_INDEX).join(' ') || '',
        Email: email,
        Phone: phone,
        Company: company,
        Lead_Source: 'PhotoTours Website Registration',
        Description: `New user registered through website form. Email: ${email}`,
      };
      const leadResult = await zohoService.createLead(leadData);
      res.json({message: 'Lead created in Zoho CRM', leadResult});
    } catch {
      res.status(CODE_500).json({error: 'Error creating lead in Zoho'});
    }

    res.json({
      success: true,
      user,
      message: 'User registered successfully',
    });
  } catch {
    res.status(CODE_500).json({error: 'Failed to register user'});
  }
});

app.get('/auth/zoho', (_req: Request, res: Response) => {
  try {
    const zohoService = createZohoService();
    const authUrl = zohoService.getAuthUrl();
    res.json({authUrl});
  } catch {
    res.status(CODE_500).json({error: 'Failed to generate auth URL'});
  }
});

app.get('/auth/zoho/callback', async (req: Request, res: Response) => {
  try {
    const code = req.query.code;
    if (!code || typeof code !== 'string') {
      return res.status(CODE_400).json({error: 'Authorization code is required'});
    }
    const zohoService = createZohoService();
    const tokens = await zohoService.exchangeCodeForTokens(code);
    res.json({
      success: true,
      message: 'Zoho authentication successful',
      tokens: {
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        expires_in: tokens.expires_in,
      },
    });
  } catch {
    res.status(CODE_500).json({error: 'Failed to authenticate with Zoho'});
  }
});

app.post('/auth/zoho/exchange', async (req: Request, res: Response) => {
  try {
    const code = req.body.code as string;
    if (!code) {
      return res.status(CODE_400).json({error: 'Authorization code is required'});
    }
    const zohoService = createZohoService();
    const tokens = await zohoService.exchangeCodeForTokens(code);
    if (tokens.refresh_token) {
      zohoService.saveRefreshToken(tokens.refresh_token);
    }
    res.json({
      success: true,
      message: 'Zoho authentication successful',
      tokens: {
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        expires_in: tokens.expires_in,
      },
    });
  } catch {
    res.status(CODE_500).json({error: 'Failed to authenticate with Zoho'});
  }
});

app.get('/api/zoho/org', (_req: Request, res: Response) => {
  try {
    const zohoService = createZohoService();
    zohoService
      .getOrganizationInfo()
      .then((orgInfo) => {
        res.json(orgInfo);
      })
      .catch(() => {
        res.status(CODE_500).json({error: 'Failed to get organization info'});
      });
  } catch {
    res.status(CODE_500).json({error: 'Failed to get organization info'});
  }
});

app.get('/api/zoho/test', async (_req: Request, res: Response) => {
  try {
    const zohoService = createZohoService();
    const testLead = {
      Last_Name: 'Test Lead',
      Email: 'test@example.com',
      Phone: '+1234567890',
      Company: 'Test Company',
    };
    const result = await zohoService.createLead(testLead);
    res.json(result);
  } catch {
    res.status(CODE_500).json({error: 'Failed to create test lead'});
  }
});

app.post('/api/zoho/leads', async (req: Request, res: Response) => {
  try {
    const leadData = req.body as Record<string, unknown>;
    const zohoService = createZohoService();
    const result = await zohoService.createLead(leadData);
    res.json(result);
  } catch {
    res.status(CODE_500).json({error: 'Failed to create lead'});
  }
});

app.post('/contact', (req: Request, res: Response) => {
  try {
    const name = req.body.name as string;
    const email = req.body.email as string;
    const message = req.body.message as string;
    if (!name || !email || !message) {
      return res.status(CODE_400).json({error: 'Name, email and message are required'});
    }
    logger.info('Contact form submitted:', {name, email, message});
    res.json({
      success: true,
      message: 'Message received successfully',
    });
  } catch (error) {
    logger.error('Error processing contact form:', error);
    res.status(CODE_500).json({error: 'Failed to process contact form'});
  }
});

app.use((_req, _res, next) => {
  next();
});

app.use('/tours', tourRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/notifications', notificationRoutes);
app.use('/bank-accounts', bankAccountRoutes);
app.use('/articles', articleRoutes);

app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
  logger.info(`API documentation available at http://localhost:${port}/api-docs`);
  logger.info('Available endpoints:');
  logger.info('   GET  / - Health check');
  logger.info('   GET  /health - Health check');
  logger.info('   POST /users - Create user');
});
