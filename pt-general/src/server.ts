import {env} from 'src/config/env';
import {prisma} from 'src/db/prisma';
import {tourRoutes} from 'src/routes/tourRoutes';
import {userRoutes} from 'src/routes/userRoutes';
import {createZohoService} from 'src/services/zohoService';
import express, {Express, Request, Response} from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const CODE_500 = 500;
const CODE_400 = 400;
const CODE_204 = 204;

const app: Express = express();
app.use(express.json());
const port = env.SERVER_PORT;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(CODE_204);
  } else {
    next();
  }
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
  },
  apis: ['./src/server.ts'], // Path to the API docs
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
 *               example: "Express + TypeScript Server"
 */
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// Тестовый endpoint для проверки
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
    const {email, name, phone, company} = req.body;

    // Создаем пользователя в базе данных
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: 'test',
      },
    });

    // Создаем лид в Zoho CRM
    const NAME_SLICE_INDEX = 1;
    try {
      const zohoService = createZohoService();
      const leadData = {
        First_Name: name.split(' ')[0] || name,
        Last_Name: name.split(' ').slice(NAME_SLICE_INDEX).join(' ') || '',
        Email: email,
        Phone: phone || '',
        Company: company || '',
        Lead_Source: 'PhotoTours Website Registration',
        Description: `Новый пользователь зарегистрировался через форму на сайте. Email: ${email}`,
      };

      const leadResult = await zohoService.createLead(leadData);
      res.json({message: 'Lead created in Zoho CRM', leadResult});
    } catch {
      res.status(CODE_500).json({error: 'Error creating lead in Zoho'});
      // Не прерываем регистрацию, если Zoho недоступен
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
    const {code} = req.query;

    if (!code || typeof code !== 'string') {
      return res.status(CODE_400).json({error: 'Authorization code is required'});
    }

    const zohoService = createZohoService();
    const tokens = await zohoService.exchangeCodeForTokens(code);

    // В реальном приложении здесь нужно сохранить токены в БД
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

// Тестовый endpoint для обмена кода на токены
app.post('/auth/zoho/exchange', async (req: Request, res: Response) => {
  try {
    const {code} = req.body;

    if (!code) {
      return res.status(CODE_400).json({error: 'Authorization code is required'});
    }

    const zohoService = createZohoService();
    const tokens = await zohoService.exchangeCodeForTokens(code);

    // Сохраняем refresh token для будущего использования
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

app.get('/api/zoho/org', async (req: Request, res: Response) => {
  try {
    const zohoService = createZohoService();
    const orgInfo = await zohoService.getOrganizationInfo();
    res.json(orgInfo);
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

app.use((req, res, next) => {
  next();
});

app.use('/general/tours', tourRoutes);
app.use('/general/users',
  userRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[server]: Server is running at http://localhost:${port}`);
  // eslint-disable-next-line no-console
  console.log(`[swagger]: API documentation available at http://localhost:${port}/api-docs`);
  // eslint-disable-next-line no-console
  console.log('[api]: Available endpoints:');
  // eslint-disable-next-line no-console
  console.log('   GET  / - Health check');
  // eslint-disable-next-line no-console
  console.log('   POST /users - Create user');
});
