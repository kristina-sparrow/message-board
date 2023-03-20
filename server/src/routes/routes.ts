import { Router } from "express";
import { check } from "express-validator";
import validateFields from "../middleware/validateFields";
import {
  getAllMessages,
  createNewMessage,
} from "../controllers/messageController";

const router = Router();

router.get("/", getAllMessages);

router.post(
  "/",
  [
    check("username", "Username is required").not().isEmpty(),
    check("text", "Text is required").not().isEmpty(),
    validateFields,
  ],
  createNewMessage
);

export default router;
