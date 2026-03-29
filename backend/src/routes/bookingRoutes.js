import express from "express";
import {
  getSlots,
  createBooking,
  getMeetings,
  cancelBooking
} from "../controllers/bookingController.js";

const router = express.Router();

router.get("/slots", getSlots);
router.post("/", createBooking);
router.get("/meetings", getMeetings);
router.delete("/booking/:id", cancelBooking);

export default router;