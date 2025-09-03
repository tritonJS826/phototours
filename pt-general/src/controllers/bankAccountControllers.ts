import {prisma} from 'src/db/prisma';
import {AuthRequest} from 'src/middlewares/auth';
import {Response} from 'express';

const HTTP = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CREATED: 201,
  SERVER: 500,
} as const;

export const getUserBankAccounts = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const bankAccounts = await prisma.bankAccount.findMany({
      where: {userId},
      orderBy: {createdAt: 'desc'},
    });

    return res.json(bankAccounts);
  } catch {
    return res.status(HTTP.SERVER).json({error: 'Internal server error'});
  }
};

export const createBankAccount = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const {accountHolder, bankName, accountType, accountNumber, routingNumber, isDefault} = req.body;
    if (!accountHolder || !bankName || !accountType || !accountNumber) {
      return res.status(HTTP.BAD_REQUEST).json({error: 'Missing required fields'});
    }

    if (isDefault) {
      await prisma.bankAccount.updateMany({where: {userId}, data: {isDefault: false}});
    }

    const bankAccount = await prisma.bankAccount.create({
      data: {
        userId,
        accountHolder,
        bankName,
        accountType,
        accountNumber,
        routingNumber,
        isDefault: Boolean(isDefault),
      },
    });

    return res.status(HTTP.CREATED).json(bankAccount);
  } catch {
    return res.status(HTTP.SERVER).json({error: 'Internal server error'});
  }
};

export const updateBankAccount = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const id = Number(req.params.id);
    const {accountHolder, bankName, accountType, accountNumber, routingNumber, isDefault} = req.body;

    if (isDefault) {
      await prisma.bankAccount.updateMany({
        where: {userId, id: {not: id}},
        data: {isDefault: false},
      });
    }

    const result = await prisma.bankAccount.updateMany({
      where: {id, userId},
      data: {accountHolder, bankName, accountType, accountNumber, routingNumber, isDefault},
    });

    if (result.count === 0) {
      return res.status(HTTP.NOT_FOUND).json({error: 'Bank account not found'});
    }

    const updated = await prisma.bankAccount.findUnique({where: {id}});

    return res.json(updated);
  } catch {
    return res.status(HTTP.SERVER).json({error: 'Internal server error'});
  }
};

export const deleteBankAccount = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const id = Number(req.params.id);

    const result = await prisma.bankAccount.deleteMany({where: {id, userId}});
    if (result.count === 0) {
      return res.status(HTTP.NOT_FOUND).json({error: 'Bank account not found'});
    }

    return res.json({message: 'Bank account deleted'});
  } catch {
    return res.status(HTTP.SERVER).json({error: 'Internal server error'});
  }
};

export const setDefaultBankAccount = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const id = Number(req.params.id);

    await prisma.bankAccount.updateMany({where: {userId}, data: {isDefault: false}});

    const result = await prisma.bankAccount.updateMany({where: {id, userId}, data: {isDefault: true}});
    if (result.count === 0) {
      return res.status(HTTP.NOT_FOUND).json({error: 'Bank account not found'});
    }

    return res.json({message: 'Default bank account updated'});
  } catch {
    return res.status(HTTP.SERVER).json({error: 'Internal server error'});
  }
};

export const getDefaultBankAccount = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const acc = await prisma.bankAccount.findFirst({where: {userId, isDefault: true}});

    return res.json(acc);
  } catch {
    return res.status(HTTP.SERVER).json({error: 'Internal server error'});
  }
};
