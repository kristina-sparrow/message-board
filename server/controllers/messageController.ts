import { Request, Response } from "express";
import Message from "../models/Message";

export const getAllMessages = async (req: Request, res: Response) => {
  const { limit = 10, since = 0 } = req.query;

  const allMessages = await Message.find()
    .sort({ added: -1 })
    .skip(Number(since))
    .limit(Number(limit));

  res.status(200).json({ allMessages });
};

export const createNewMessage = async (req: Request, res: Response) => {
  const { username, text } = req.body;

  try {
    const newMessage = { username, text };
    const messageDB = new Message(newMessage);
    await messageDB.save();
    res.status(201).json({
      msg: "Created new message",
      messageDB,
    });
  } catch (err) {
    res.sendStatus(500);
    console.error(err);
  }
};
