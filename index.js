import express from 'express';
import mysql from 'mysql2';
import { randomInt } from 'crypto';

const app = express();
const port = process.env.DB_PORT;

app.use(express.json());
app.use(express.static('public'));

import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();


app.post('/pickHair', async (req, res) => {
  const { length, state } = req.body;

  try {
    const [rows] = await pool.query(
      'SELECT styleID FROM HairStyles WHERE styleLength = ? AND styleState = ?',
      [length, state]
    );

    if (rows.length === 0) return res.json({ styleID: null });

    const randomIndex = randomInt(rows.length);
    const styleID = rows[randomIndex].styleID;

    res.json({ styleID });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
