import mongoose, { ConnectOptions } from 'mongoose';

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions)
    console.log('Database connection works!!!');
  } catch (error) {
    console.log(error);
    throw new Error("Error while trying to connect database");
  }
};

export { dbConnection };