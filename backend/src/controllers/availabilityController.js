import db from "../config/db.js";

export const setAvailability = (req, res) => {
  const { day, startTime, endTime } = req.body;
if(day===undefined || startTime===undefined || endTime===undefined){
    return res.status(400).json({ error: "All fields are required" });
  }
  if(day< 1 || day>7){
    return res.status(400).json({ error: "Day must be between 1 (Sunday) and 7 (Saturday)" });
  }
  const sql =
    "INSERT INTO availability (day, start_time, end_time) VALUES (?, ?, ?)";

  db.query(sql, [day, startTime, endTime], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Availability set" });
  });
};

export const getAvailability = (req, res) => {
  db.query("SELECT * FROM availability", (err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results);
  });
};