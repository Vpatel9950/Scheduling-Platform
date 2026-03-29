import express from "express";
import cors from "cors";

import eventRoutes from "./routes/eventRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import availabilityRoutes from "./routes/availabilityRoutes.js";

const app = express();

// ✅ Allow all origins
app.use(cors());

app.use(express.json());

// Routes
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/availability", availabilityRoutes);

app.get("/", (req, res) => {
  res.send("API running 🚀");
});

export default app;