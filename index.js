import express from 'express';
import mysql from 'mysql2';
import { randomInt } from 'crypto';

const app = express();
const port = 5500;

app.use(express.json());
app.use(express.static('public'));

import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();


app.post('/pickHair', async (req, res) => {
  const { length, state } = req.body;

  try {
    const [rows] = await pool.query(
      'SELECT styleLink FROM Styles WHERE StyleLength = ? AND styleState = ?',
      [length, state]
    );

    if (rows.length === 0) return res.json({ link: null });

    const randomIndex = randomInt(rows.length);
    const link = rows[randomIndex].styleLink;

    res.json({ link });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
