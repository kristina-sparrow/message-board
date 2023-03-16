import { Request, Response } from "express";
const Message = require("../models/Message");

const getAllMessages = async (req: Request, res: Response) => {
  const { limit = 10, since = 0 } = req.query;

  const allMessages = await Message.find()
    .sort({ $natural: -1 })
    .skip(Number(since))
    .limit(Number(limit));

  res.status(200).json({ allMessages });
};

const createNewMessage = async (req: Request, res: Response) => {
  const { username, text } = req.body;

  try {
    const newMessage = { username, text };
    await Message.create(newMessage);
    res.status(201).json(newMessage);
  } catch (err) {
    res.sendStatus(500);
    console.error(err);
  }
};

module.exports = {
  getAllMessages,
  createNewMessage,
};
