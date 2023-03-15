import { Request, Response } from 'express';
import { TransactionModel } from '../models/transaction.model';

const transactionGet = async (req: Request, res: Response) => {
  const { limit = 20, skip = 0 } = req.query;  
  const [total, transactions] = await Promise.all([
    TransactionModel.countDocuments(),
    TransactionModel.find()
      .skip(Number(skip))
      .limit(Number(limit))      
  ]);
  res.status(200).json({ 
    total,
    transactions
   });
};

const transactionPost = async (req: Request, res: Response) => {
  const data = req.body;
  const transaction = new TransactionModel(data);
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
    message: 'table deleted'
  });
};

export { transactionGet, transactionPost, transactionPut, transactionDelete };
