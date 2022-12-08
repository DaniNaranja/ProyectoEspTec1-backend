import express from "express";
import { getDrawing } from "../controllers/visor.controller.js";

const router = express.Router();

router.get("/:drawId", getDrawing);


export default router;
