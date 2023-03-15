import { Request, Response } from 'express';
import { TransactionModel } from '../models/transaction.model';

const transactionGet = async (req: Request, res: Response) => {
  const { limit = process.env.MAX_PAGINATION || 100, skip = 0 } = req.query;
  const [total, transactions] = await Promise.all([
    TransactionModel.countDocuments(),
    TransactionModel.find()
      .skip(Number(skip))
      .limit(Number(limit))
      .sort({ timestamp: -1 }),
  ]);
  res.status(200).json({
    total,
    transactions,
  });
};

const transactionPost = async (req: Request, res: Response) => {
  const data = req.body;
  data.timestamp = data.data[0].timestamp || new Date().toISOString();
  const transaction = new TransactionModel(data);
  console.log(transaction);
  await transaction.save();
  res.status(201).json(transaction);
};

const transactionPut = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ id });
};

const transactionDelete = async (req: Request, res: Response) => {
  await TransactionModel.deleteMany();
  res.status(200).json({
    message: 'table deleted',
  });
};

export { transactionGet, transactionPost, transactionPut, transactionDelete };
