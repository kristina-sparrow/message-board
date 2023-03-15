require("dotenv").config();
import { Request, Response } from "express";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./database/db");
const app = express();

const PORT = process.env.PORT || 3000;
connectDB();

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.all("*", (req: Request, res: Response) => {
  res.sendStatus(404);
});

// listen
mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});
