import WebSocket from 'ws';
import { socketUrl } from '../enums/socket_url.enum';
import { Transaction } from '../interfaces/transactions.inteface';
import { TransactionModel } from '../models/transaction.model';

const socketController = (book: string, currency: string) => {
  const ws = new WebSocket(`${socketUrl.bitmexRealtime},${book}:${currency}`);

  ws.on('error', console.error);

  ws.on('open', function open() {
    console.log('web socket connected');
  });

  ws.on('message', async function message(data) {
    const transaction = JSON.parse(data.toString());
    saveTransaction(transaction);
  });
};

const saveTransaction = async (transaction: Transaction) => {
  try {
    const data = new TransactionModel(transaction);
    await data.save();
    console.log(
      `operation saved ${transaction.action} table ${transaction.table} operations ${transaction.data.length}`
    );
  } catch (error: any) {
    console.error(error.message);
  }
};

export { socketController };
