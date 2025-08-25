import {env} from 'src/config/env';
import {prisma} from 'src/db/prisma';
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
const host = process.env.HOST || '0.0.0.0';

const ALLOWED_ORIGINS = new Set([
  'http://localhost:5173',
  'http://localhost:5174',
]);

app.use((req, res, next) => {
  const origin = req.headers.origin as string | undefined;

  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.header('Access-Control-Allow-Origin', origin); // Из main
  }

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

// Swagger configuration
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
  apis: ['./src/server.ts', './src/routes/*.ts'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns server status to verify API is running
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Server is running
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: 'Express + TypeScript Server'
 */
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// Test endpoint for verification
app.get('/test', (req: Request, res: Response) => {
  res.json({message: 'Test endpoint works!'});
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - name
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               name:
 *                 type: string
 *                 description: User's full name
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 email:
 *                   type: string
 *                 name:
 *                   type: string
 *                 role:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       500:
 *         description: Server error
 */

app.post('/users', async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const phone = req.body.phone;
    const company = req.body.company;

    // Create user in database
    const user = await prisma.user.create({
      data: {
        email,
        firstName: name.split(' ')[0] || name,
        lastName: name.split(' ').slice(NAME_SLICE_INDEX).join(' ') || '',
        password: 'test',
      },
    });

    // Create lead in Zoho CRM
    try {
      const zohoService = createZohoService();
      const leadData = {
        First_Name: name.split(' ')[0] || name,
        Last_Name: name.split(' ').slice(NAME_SLICE_INDEX).join(' ') || '',
        Email: email,
        Phone: phone || '',
        Company: company || '',
        Lead_Source: 'PhotoTours Website Registration',
        Description: `New user registered through website form. Email: ${email}`,
      };

      const leadResult = await zohoService.createLead(leadData);
      res.json({message: 'Lead created in Zoho CRM', leadResult});
    } catch {
      res.status(CODE_500).json({error: 'Error creating lead in Zoho'});
      // Don't interrupt registration if Zoho is unavailable
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

// Zoho OAuth endpoints
app.get('/auth/zoho', (req: Request, res: Response) => {
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

    // In a real application, tokens should be saved to database here
    // console.log('✅ Zoho tokens received:', {
    //   access_token: tokens.access_token.substring(0, 20) + '...',
    //   refresh_token: tokens.refresh_token.substring(0, 20) + '...',
    // });

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

// Test endpoint for exchanging code for tokens
app.post('/auth/zoho/exchange', async (req: Request, res: Response) => {
  try {
    const code = req.body.code;

    if (!code) {
      return res.status(CODE_400).json({error: 'Authorization code is required'});
    }

    const zohoService = createZohoService();
    const tokens = await zohoService.exchangeCodeForTokens(code);

    // Save refresh token for future use
    if (tokens.refresh_token) {
      zohoService.saveRefreshToken(tokens.refresh_token);
    }

    // Console.log('�� Full Zoho response:', JSON.stringify(tokens, null, 2));
    // console.log('✅ Zoho tokens received:', {
    //   access_token: tokens.access_token ? tokens.access_token.substring(0, 20) + '...' : 'undefined',
    //   refresh_token: tokens.refresh_token ? tokens.refresh_token.substring(0, 20) + '...' : 'undefined',
    // });

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

app.get('/api/zoho/org', (req: Request, res: Response) => {
  try {
    const zohoService = createZohoService();
    zohoService.getOrganizationInfo().then(orgInfo => {
      res.json(orgInfo);
    }).catch(() => {
      res.status(CODE_500).json({error: 'Failed to get organization info'});
    });
  } catch {
    res.status(CODE_500).json({error: 'Failed to get organization info'});
  }
});

app.get('/api/zoho/test', async (req: Request, res: Response) => {
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
    const leadData = req.body;
    const zohoService = createZohoService();
    const result = await zohoService.createLead(leadData);
    res.json(result);
  } catch {

    res.status(CODE_500).json({error: 'Failed to create lead'});
  }
});

// Contact form endpoint
app.post('/contact', (req: Request, res: Response) => {
  try {
    const {name, email, message} = req.body;

    if (!name || !email || !message) {
      return res.status(CODE_400).json({error: 'Name, email and message are required'});
    }

    // TODO: Save to database
    logger.info('Contact form submitted:', {name, email, message});

    // For now, just return success
    res.json({
      success: true,
      message: 'Message received successfully',
    });
  } catch (error) {
    logger.error('Error processing contact form:', error);
    res.status(CODE_500).json({error: 'Failed to process contact form'});
  }
});

app.use((req, res, next) => {
  next();
});

app.use('/general/tours', tourRoutes);
app.use('/general/users', userRoutes);
app.use('/general/auth', authRoutes);
app.use('/general/notifications', notificationRoutes);
app.use('/general/bank-accounts', bankAccountRoutes);

app.listen(port, host, () => {
  logger.info(`Server is running at http://${host}:${port}`);
  logger.info(`API documentation available at http://localhost:${port}/api-docs`);
  logger.info('Available endpoints:');
  logger.info('   GET  / - Health check');
  logger.info('   GET  /health - Health check');
  logger.info('   POST /users - Create user');
});
