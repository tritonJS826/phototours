import {prisma} from 'src/db/prisma';
import {Request, Response} from 'express';

// HTTP status codes
const HTTP_STATUS = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CREATED: 201,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const getUserBankAccounts = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const bankAccounts = await prisma.bankAccount.findMany({
      where: {userId},
      orderBy: {createdAt: 'desc'},
    });

    res.json(bankAccounts);
  } catch {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};

export const createBankAccount = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const {accountHolder, bankName, accountType, accountNumber, routingNumber, isDefault} = req.body;

    if (!accountHolder || !bankName || !accountType || !accountNumber) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({error: 'Missing required fields'});
    }

    if (isDefault) {
      await prisma.bankAccount.updateMany({
        where: {userId},
        data: {isDefault: false},
      });
    }

    const bankAccount = await prisma.bankAccount.create({
      data: {
        userId,
        accountHolder,
        bankName,
        accountType,
        accountNumber,
        routingNumber,
        isDefault: isDefault || false,
      },
    });

    res.status(HTTP_STATUS.CREATED).json(bankAccount);
  } catch {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};

export const updateBankAccount = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    const {id} = req.params;
    if (!userId) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const {accountHolder, bankName, accountType, accountNumber, routingNumber, isDefault} = req.body;

    if (isDefault) {
      await prisma.bankAccount.updateMany({
        where: {userId, id: {not: parseInt(id)}},
        data: {isDefault: false},
      });
    }

    const bankAccount = await prisma.bankAccount.updateMany({
      where: {
        id: parseInt(id),
        userId,
      },
      data: {
        accountHolder,
        bankName,
        accountType,
        accountNumber,
        routingNumber,
        isDefault,
      },
    });

    if (bankAccount.count === 0) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({error: 'Bank account not found'});
    }

    const updatedAccount = await prisma.bankAccount.findUnique({where: {id: parseInt(id)}});

    res.json(updatedAccount);
  } catch {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};

export const deleteBankAccount = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    const {id} = req.params;
    if (!userId) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const bankAccount = await prisma.bankAccount.deleteMany({
      where: {
        id: parseInt(id),
        userId,
      },
    });

    if (bankAccount.count === 0) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({error: 'Bank account not found'});
    }

    res.json({message: 'Bank account deleted'});
  } catch {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};

export const setDefaultBankAccount = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    const {id} = req.params;
    if (!userId) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    await prisma.bankAccount.updateMany({
      where: {userId},
      data: {isDefault: false},
    });

    const bankAccount = await prisma.bankAccount.updateMany({
      where: {
        id: parseInt(id),
        userId,
      },
      data: {isDefault: true},
    });

    if (bankAccount.count === 0) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({error: 'Bank account not found'});
    }

    res.json({message: 'Default bank account updated'});
  } catch {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};

export const getDefaultBankAccount = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const defaultAccount = await prisma.bankAccount.findFirst({where: {userId, isDefault: true}});

    res.json(defaultAccount);
  } catch {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};
