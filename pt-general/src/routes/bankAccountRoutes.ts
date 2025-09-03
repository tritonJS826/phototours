import {
  createBankAccount,
  deleteBankAccount,
  getDefaultBankAccount,
  getUserBankAccounts,
  setDefaultBankAccount,
  updateBankAccount,
} from 'src/controllers/bankAccountControllers';
import {authenticateToken} from 'src/middlewares/auth';
import {Router} from 'express';

const router = Router();

router.use(authenticateToken);

router.get('/', getUserBankAccounts);

router.get('/default', getDefaultBankAccount);

router.post('/', createBankAccount);

router.put('/:id', updateBankAccount);

router.patch('/:id/default', setDefaultBankAccount);

router.delete('/:id', deleteBankAccount);

export {router as bankAccountRoutes};
