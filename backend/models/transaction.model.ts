import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const TransactionSchema = new Schema({
  table: {
    type: String,
    required: [true, 'Table is required'],
  },
  action: {
    type: String,
    required: [true, 'Action is required'],
  },
  data: {
    type: Array,
    required: [true, 'Data is required'],
  },
  timestamp: {
    type: String,
    required: [true, 'Timestamp is required'],
  }
});

const TransactionModel = model('Transactions', TransactionSchema)
export { TransactionModel };
