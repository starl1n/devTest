import express, { Application } from "express";
import cors from "cors";
import transactionRoutes from "../routes/transaction.routes";
import { dbConnection } from "../database/dbconnection";
import { apiUrl } from "../enums/api_url.enum";
import { socketController } from "../sockets/ws-socket-controller";
import { book } from "../enums/books.enum";
import { currency } from "../enums/currency.enum";


class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";

    this.connectToDb();
    this.middlewares();
    this.routes();
    this.sockets();
  }

  async connectToDb() {
    try {
      await dbConnection();    
    } catch (error) {
      console.error(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(apiUrl.transaction, transactionRoutes);
  }

  sockets() {
    try {
      socketController(book.orderBookL2_25, currency.xbtusd);
    } catch (error) {
      console.error(error);
    }    
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server Running on port ${this.port}`);
    });
  }
}

export default Server;
