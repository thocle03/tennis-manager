const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/twt.db");

db.serialize(() => {
  db.run(`ALTER TABLE players ADD COLUMN age INTEGER DEFAULT 18`);
  db.run(`ALTER TABLE players ADD COLUMN potential INTEGER DEFAULT 70`);
  db.run(`ALTER TABLE players ADD COLUMN level INTEGER DEFAULT 10`);
  db.run(`ALTER TABLE players ADD COLUMN wildcards_left INTEGER DEFAULT 3`);
  db.run(`ALTER TABLE players ADD COLUMN training_pts INTEGER DEFAULT 0`);
  db.run(`ALTER TABLE players ADD COLUMN is_human INTEGER DEFAULT 0`);

  console.log("✅ Colonnes supplémentaires ajoutées à la table 'players'.");
  db.close();
});
