interface Transaction {
  total: number;
  transactions: DetailTransactions[]
}

interface DetailTransactions {
  _id: string;
  table: string;
  action: string;
  data: Operations[];
  timestamp: string;
}

interface Operations {
  symbol: string;
  lastPrice: number;
  timestamp: string;
}

export { Transaction, DetailTransactions }
