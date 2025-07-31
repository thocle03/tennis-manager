const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3001;
const dbPath = path.join(__dirname, 'data', 'twt.db');

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database(dbPath);

// INIT DB
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    nationality TEXT,
    style TEXT,
    points INTEGER DEFAULT 0,
    money INTEGER DEFAULT 1500
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS calendar (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    week INTEGER,
    name TEXT,
    surface TEXT,
    category TEXT
  )`);
});

// ROUTES
app.get('/players', (req, res) => {
  db.all("SELECT * FROM players ORDER BY points DESC", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/players', (req, res) => {
  const { name, nationality, style } = req.body;
  db.run(`INSERT INTO players (name, nationality, style) VALUES (?, ?, ?)`, [name, nationality, style], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
});

app.get('/calendar', (req, res) => {
  db.all("SELECT * FROM calendar ORDER BY week ASC", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/simulate-week', (req, res) => {
  db.run("UPDATE players SET points = points + 10 WHERE id IN (SELECT id FROM players ORDER BY RANDOM() LIMIT 5)", [], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Semaine simulée : points mis à jour aléatoirement." });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend TWT lancé sur http://localhost:${PORT}`);
});
