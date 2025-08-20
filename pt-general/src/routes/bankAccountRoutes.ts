import {
  createBankAccount,
  deleteBankAccount,
  getDefaultBankAccount,
  getUserBankAccounts,
  setDefaultBankAccount,
  updateBankAccount,
} from 'src/controllers/bankAccountControllers';
import {authenticateToken} from 'src/middleware/auth';
import {Router} from 'express';

const router = Router();

// Все маршруты требуют аутентификации
router.use(authenticateToken);

// Получить все банковские счета пользователя
router.get('/', getUserBankAccounts);

// Получить основной банковский счет пользователя
router.get('/default', getDefaultBankAccount);

// Создать новый банковский счет
router.post('/', createBankAccount);

// Обновить банковский счет
router.put('/:id', updateBankAccount);

// Установить банковский счет как основной
router.patch('/:id/default', setDefaultBankAccount);

// Удалить банковский счет
router.delete('/:id', deleteBankAccount);

export {router as bankAccountRoutes};
