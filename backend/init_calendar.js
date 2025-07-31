const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const db = new sqlite3.Database('./data/twt.db');
const sql = fs.readFileSync('./data/init_calendar.sql', 'utf8');

db.exec(sql, (err) => {
  if (err) {
    console.error("❌ Erreur :", err.message);
  } else {
    console.log("✅ Calendrier chargé avec succès !");
  }
  db.close();
});
