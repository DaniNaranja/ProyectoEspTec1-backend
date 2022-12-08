import express from "express";
import { submitDrawing } from "../controllers/submit.controller.js";

const router = express.Router();

router.post("/:userId", submitDrawing);



export default router;

