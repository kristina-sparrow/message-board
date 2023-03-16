const express = require("express");
const validateFields = require("../middleware/validateFields");
import { check } from "express-validator";
const {
  getAllMessages,
  createNewMessage,
} = require("../controllers/messageController");

const router = express.Router();

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

module.exports = router;
