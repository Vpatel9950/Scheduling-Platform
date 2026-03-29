import db from "../config/db.js";
import { generateSlots } from "../services/slotService.js";
import { sendEmail } from "../utils/sendEmail.js";


// 🟢 GET AVAILABLE SLOTS
export const getSlots = (req, res) => {
  const { date, eventId } = req.query;

  db.query(
    "SELECT * FROM events WHERE id = ?",
    [eventId],
    (err, eventResult) => {
      if (err) return res.status(500).json(err);

      if (!eventResult.length)
        return res.status(404).json({ error: "Event not found" });

      const duration = eventResult[0].duration;
      const day = new Date(date).getDay();

      db.query(
        "SELECT * FROM availability WHERE day = ?",
        [day],
        (err, availResult) => {
          if (err) return res.status(500).json(err);

          if (!availResult.length) return res.json([]);

          const { start_time, end_time } = availResult[0];
          const slots = generateSlots(start_time, end_time, duration);

          db.query(
            "SELECT time FROM bookings WHERE date=? AND event_id=?",
            [date, eventId],
            (err, bookingResult) => {
              if (err) return res.status(500).json(err);

              const booked = bookingResult.map((b) => b.time);

              const available = slots.filter(
                (slot) => !booked.includes(slot)
              );

              res.json(available);
            }
          );
        }
      );
    }
  );
};


// 🟢 CREATE BOOKING + EMAIL
export const createBooking = (req, res) => {
  const { name, email, date, time, eventId } = req.body;

  const checkSql =
    "SELECT * FROM bookings WHERE date=? AND time=? AND event_id=?";

  db.query(checkSql, [date, time, eventId], (err, result) => {
    if (result.length > 0) {
      return res.status(400).json({ error: "Slot already booked" });
    }

    const sql =
      "INSERT INTO bookings (name, email, date, time, event_id) VALUES (?, ?, ?, ?, ?)";

    db.query(sql, [name, email, date, time, eventId], async (err, result) => {
      if (err) return res.status(500).json(err);

      // 📩 CONFIRMATION EMAIL
      await sendEmail(
        email,
        "Booking Confirmed ✅",
        `Hello ${name}, your booking is confirmed on ${date} at ${time}`
      );

      res.json({ message: "Booking confirmed & email sent" });
    });
  });
};


// 🟢 GET ALL BOOKINGS
export const getMeetings = (req, res) => {
  db.query("SELECT * FROM bookings", (err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results);
  });
};


// 🔴 CANCEL BOOKING + EMAIL (NEW 🔥)
export const cancelBooking = (req, res) => {
  const { id } = req.params;

  // 1. Booking data fetch karo (email ke liye)
  db.query("SELECT * FROM bookings WHERE id=?", [id], async (err, result) => {
    if (err) return res.status(500).json(err);

    if (!result.length) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const booking = result[0];

    // 2. Delete booking
    db.query("DELETE FROM bookings WHERE id=?", [id], async (err) => {
      if (err) return res.status(500).json(err);

      // 📩 CANCELLATION EMAIL
      await sendEmail(
        booking.email,
        "Booking Cancelled ❌",
        `Hello ${booking.name}, your booking on ${booking.date} at ${booking.time} has been cancelled`
      );

      res.json({ message: "Booking cancelled & email sent" });
    });
  });
};