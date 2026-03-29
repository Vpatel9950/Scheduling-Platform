import dotenv from "dotenv";
dotenv.config();

import mysql from "mysql2";

const db = mysql.createPool(process.env.DATABASE_URL);

db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ DB Connection Failed:", err);
  } else {
    console.log("✅ Railway MySQL Connected");
    connection.release();
  }
});

export default db;