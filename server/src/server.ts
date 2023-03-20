import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import connectDB from "./config/db";
import routes from "./routes/routes";
import cors from "cors";
import { corsOptions } from "./config/corsOptions";

const app: express.Express = express();

const findup = require("findup-sync");
const findEnv = () => findup(".env");
dotenv.config({ path: findEnv() });

const PORT = process.env.PORT || 3000;
connectDB();

// middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/", routes);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});

// listen
mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});
