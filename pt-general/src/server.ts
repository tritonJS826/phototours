import {env} from 'src/config/env';
import {prisma} from 'src/db/prisma';
import express, {Express, Request, Response} from 'express';
import { createZohoService } from './services/zohoService';

const CODE_500 = 500;

const app: Express = express();
app.use(express.json());
const port = env.SERVER_PORT;

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// Тестовый endpoint для проверки
app.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Test endpoint works!' });
});

app.post('/users', async (req: Request, res: Response) => {
  try {
    const {email, name} = req.body;
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: 'test',
      },
    });
    res.json(user);
  } catch (error) {
    res.status(CODE_500).json({error});
  }
});

// Zoho OAuth endpoints
app.get('/auth/zoho', (req: Request, res: Response) => {
  try {
    const zohoService = createZohoService();
    const authUrl = zohoService.getAuthUrl();
    res.json({ authUrl });
  } catch (error) {
    console.error('Error generating auth URL:', error);
    res.status(500).json({ error: 'Failed to generate auth URL' });
  }
});

app.get('/auth/zoho/callback', async (req: Request, res: Response) => {
  try {
    const { code } = req.query;
    
    if (!code || typeof code !== 'string') {
      return res.status(400).json({ error: 'Authorization code is required' });
    }

    const zohoService = createZohoService();
    const tokens = await zohoService.exchangeCodeForTokens(code);
    
    // В реальном приложении здесь нужно сохранить токены в БД
    console.log('✅ Zoho tokens received:', {
      access_token: tokens.access_token.substring(0, 20) + '...',
      refresh_token: tokens.refresh_token.substring(0, 20) + '...'
    });

    res.json({ 
      success: true, 
      message: 'Zoho authentication successful',
      tokens: {
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        expires_in: tokens.expires_in
      }
    });
  } catch (error) {
    console.error('Error exchanging code for tokens:', error);
    res.status(500).json({ error: 'Failed to authenticate with Zoho' });
  }
});

// Тестовый endpoint для обмена кода на токены
app.post('/auth/zoho/exchange', async (req: Request, res: Response) => {
  try {
    const { code } = req.body;
    
    if (!code) {
      return res.status(400).json({ error: 'Authorization code is required' });
    }

    const zohoService = createZohoService();
    const tokens = await zohoService.exchangeCodeForTokens(code);
    
    // Сохраняем refresh token для будущего использования
    if (tokens.refresh_token) {
      zohoService.saveRefreshToken(tokens.refresh_token);
    }
    
    console.log('🔍 Full Zoho response:', JSON.stringify(tokens, null, 2));
    console.log('✅ Zoho tokens received:', {
      access_token: tokens.access_token ? tokens.access_token.substring(0, 20) + '...' : 'undefined',
      refresh_token: tokens.refresh_token ? tokens.refresh_token.substring(0, 20) + '...' : 'undefined'
    });

    res.json({ 
      success: true, 
      message: 'Zoho authentication successful',
      tokens: {
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        expires_in: tokens.expires_in
      }
    });
  } catch (error) {
    console.error('Error exchanging code for tokens:', error);
    res.status(500).json({ error: 'Failed to authenticate with Zoho' });
  }
});

app.get('/api/zoho/org', async (req: Request, res: Response) => {
  try {
    const zohoService = createZohoService();
    const orgInfo = await zohoService.getOrganizationInfo();
    res.json(orgInfo);
  } catch (error) {
    console.error('Error getting organization info:', error);
    res.status(500).json({ error: 'Failed to get organization info' });
  }
});

app.get('/api/zoho/test', async (req: Request, res: Response) => {
  try {
    const zohoService = createZohoService();
    const testLead = {
      Last_Name: "Test Lead",
      Email: "test@example.com",
      Phone: "+1234567890",
      Company: "Test Company"
    };
    const result = await zohoService.createLead(testLead);
    res.json(result);
  } catch (error) {
    console.error('Error creating test lead:', error);
    res.status(500).json({ error: 'Failed to create test lead' });
  }
});

app.post('/api/zoho/leads', async (req: Request, res: Response) => {
  try {
    const leadData = req.body;
    const zohoService = createZohoService();
    const result = await zohoService.createLead(leadData);
    res.json(result);
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ error: 'Failed to create lead' });
  }
});


// Проверка подключения к базе данных
async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
}

// Запуск сервера с проверкой базы данных
async function startServer() {
  await checkDatabaseConnection();
  
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

startServer();
