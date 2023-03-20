import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import connectDB from "./database/db";
import cors from "cors";
import routes from "./routes/routes";

const app: express.Express = express();

dotenv.config();
const PORT = process.env.PORT || 3000;
connectDB();

// middleware
app.use(cors());
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