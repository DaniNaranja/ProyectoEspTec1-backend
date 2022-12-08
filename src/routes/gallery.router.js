import express from "express";
import { getAllDrawings } from "../controllers/gallery.controller.js";

const router = express.Router();

router.get("/", getAllDrawings);

export default router;
