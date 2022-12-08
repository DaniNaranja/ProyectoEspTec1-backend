import express from "express";
import { getUserProfile, editProfile } from "../controllers/profile.controller.js";

const router = express.Router();

router.get("/:userId", getUserProfile);

router.put("/edit_profile/:userId", editProfile)




export default router;
