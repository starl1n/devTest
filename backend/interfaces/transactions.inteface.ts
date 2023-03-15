interface Transaction {
  table: string;
  action: string;
  data: any[];
  timestamp: string;
}

export { Transaction };
