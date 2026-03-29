import express from "express";
import {
  createEvent,
  getEvents,
  deleteEvent,
  updateEvent   // 🔥 add this
} from "../controllers/eventController.js";

const router = express.Router();

// 🟢 Create event
router.post("/", createEvent);

// 🟢 Get all events
router.get("/", getEvents);

// 🟢 Update event (NEW 🔥)
router.put("/:id", updateEvent);

// 🟢 Delete event
router.delete("/:id", deleteEvent);

export default router;