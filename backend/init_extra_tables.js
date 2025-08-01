const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/twt.db");

db.serialize(() => {
  // Résultats des matchs
  db.run(`CREATE TABLE IF NOT EXISTS results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tournament_id INTEGER,
    round TEXT,
    player1_id INTEGER,
    player2_id INTEGER,
    score TEXT,
    winner_id INTEGER
  )`);

  // Statistiques personnelles
  db.run(`CREATE TABLE IF NOT EXISTS stats (
    player_id INTEGER PRIMARY KEY,
    tournois_joues INTEGER DEFAULT 0,
    victoires INTEGER DEFAULT 0,
    defaites INTEGER DEFAULT 0,
    titres INTEGER DEFAULT 0,
    surface_favorite TEXT
  )`);

  // Blessures
  db.run(`CREATE TABLE IF NOT EXISTS injuries (
    player_id INTEGER,
    injury_week INTEGER,
    weeks_out INTEGER,
    description TEXT
  )`);

  // Fatigue
  db.run(`CREATE TABLE IF NOT EXISTS fatigue (
    player_id INTEGER PRIMARY KEY,
    fatigue_level INTEGER DEFAULT 0
  )`);

  console.log("✅ Tables supplémentaires créées avec succès !");
  db.close();
});
