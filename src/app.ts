import express from "express";
import routes from "./routes";
import config from "./config/config";
// import Mongo

class App {
  private readonly contextPath: string = config.constants.CONTEXT_PATH;

  public readonly app: express.Application;

  constructor() {
    this.app = express();

    this.configure();
    this.routes();
  }

  private async configure() {
    this.app.use(express.json());
    // await Mongo.connect(config.mongodb)
  }

  private routes() {
    this.app.use(`${this.contextPath}/transactions`, routes.transactionsRoutes);
    this.app.use(this.contextPath, routes.loginRoutes);
  }
}

export default new App().app;
