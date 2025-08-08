import { PrismaClient } from 'src/generated/prisma';

// Создание экземпляра Prisma с настройками для разработки
export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

// Функция для проверки подключения к базе данных
export async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Database connection established successfully');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
}

// Функция для закрытия подключения
export async function closeDatabaseConnection() {
  try {
    await prisma.$disconnect();
    console.log('✅ Database connection closed successfully');
  } catch (error) {
    console.error('❌ Error closing database connection:', error);
  }
}

// Обработка сигналов завершения для корректного закрытия подключения
process.on('beforeExit', async () => {
  await closeDatabaseConnection();
});

process.on('SIGINT', async () => {
  await closeDatabaseConnection();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await closeDatabaseConnection();
  process.exit(0);
});
