import express from "express";
import { getMessagesByUser, getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:userId/messages", getMessagesByUser);

export default router;
