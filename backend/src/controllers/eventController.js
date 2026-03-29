import db from "../config/db.js";


// 🟢 CREATE EVENT
let url;
export const createEvent = (req, res) => {
  const { title, duration, slug ,type} = req.body;

  // validation
  if (!title || !duration || !slug)  {
    return res.status(400).json({ error: "All fields are required" });
  }
  let result=slug.replace(/\s+/g, '-').toLowerCase();
  db.query("SELECT * FROM frontendUrl", (err, results) => {
  if (err) {
    console.log(err);
    return;
  }

  if (results.length === 0 || results[0].url == null) {
    console.log(null);
  } else {
    console.log(results[0].url);
  }
  url = `http://localhost:3000/${type+result}`});

  const sql = "INSERT INTO events (title, duration, slug , type, url) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [title, duration, slug , type, url], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ error: "Slug already exists" });
      }
      return res.status(500).json(err);
    }
    
    res.status(201).json({
      id: result.insertId,
      title,
      duration,
      slug,
      type,
      url
    });
  });
};



// 🟢 GET ALL EVENTS
export const getEvents = (req, res) => {
  db.query("SELECT * FROM events ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results);
  });
};



// 🟢 GET EVENT BY SLUG (for public booking page 🔥)
export const getEventBySlug = (req, res) => {
  const { slug } = req.params;

  db.query("SELECT * FROM events WHERE slug = ?", [slug], (err, result) => {
    if (err) return res.status(500).json(err);

    if (!result.length) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(result[0]);
  });
};



// 🟢 UPDATE EVENT
export const updateEvent = (req, res) => {
  const { id } = req.params;
  const { title, duration, slug } = req.body;

  if (!title || !duration || !slug) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql =
    "UPDATE events SET title=?, duration=?, slug=? WHERE id=?";

  db.query(sql, [title, duration, slug, id], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ error: "Slug already exists" });
      }
      return res.status(500).json(err);
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json({
      message: "Event updated successfully",
      publicLink: `http://localhost:3000/book/${slug}`
    });
  });
};



// 🟢 DELETE EVENT (CASCADE supported)
export const deleteEvent = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM events WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json({ message: "Event deleted successfully" });
  });
};