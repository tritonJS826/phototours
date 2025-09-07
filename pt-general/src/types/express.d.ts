declare global {
  namespace Express {
    interface Request {
      userId?: number;
      user?: {
        userId: number;
        email: string;
        role: string;
      };
    }
  }
}

export {};
