import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import connectDB from "./database/db";
import cors from "cors";
import routes from "./routes/routes";
import path from "path";

const app: express.Express = express();

const findup = require("findup-sync");
const findEnv = () => findup(".env");
dotenv.config({ path: findEnv() });

const PORT = process.env.PORT || 3000;
connectDB();

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../client/public")));

// routes
app.use("/", routes);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});

// listen
mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});
