const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const db = new sqlite3.Database('./data/twt.db');

db.serialize(() => {
  // Créer la table si elle n'existe pas
  db.run(`CREATE TABLE IF NOT EXISTS calendar (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    week INTEGER,
    name TEXT,
    surface TEXT,
    category TEXT
  )`);

  // Lire le fichier SQL
  const sql = fs.readFileSync('./data/init_calendar.sql', 'utf8');

  // Lancer les insertions
  db.exec(sql, (err) => {
    if (err) {
      console.error("❌ Erreur :", err.message);
    } else {
      console.log("✅ Table 'calendar' créée et calendrier inséré !");
    }
    db.close();
  });
});
