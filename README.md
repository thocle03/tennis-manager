# 🎾 Tom World Tour (TWT) – Tennis Manager en ligne (local)

---

## 🧠 Concept

**TWT** est un jeu de gestion de carrière de tennis simulé, dans lequel chaque joueur humain peut :

* Créer son propre joueur personnalisé (nom, nationalité, style de jeu)
* Participer à des tournois hebdomadaires (comme le circuit ATP)
* Gérer sa progression, son argent, sa fatigue et ses statistiques
* Affronter plus de **400 joueurs IA** (répartis en catégories : légendes, champions, internationaux, etc.)

Le jeu est **jouable en réseau local** avec des amis.

---

## 🚀 Technologies utilisées

### 🧑‍💻 Frontend

* **React** (Vite)
* **Tailwind CSS** (UI rapide et moderne)
* **React Router DOM** (navigation)
* **Axios** (API HTTP)

### 🧠 Backend

* **Node.js + Express** (API REST locale)
* **SQLite** (base de données locale légère)
* **Body-Parser / CORS** (middleware Express)

---

## 📁 Structure des fichiers

```
📦 tennis-manager/
├── backend/                # Serveur Node.js + base SQLite
│   ├── data/
│   │   ├── twt.db          # Base de données SQLite
│   │   └── init_calendar.sql
│   ├── seed_ia.js          # Génère 400 joueurs IA
│   ├── init_db.js          # Crée + insère les tournois
│   ├── server.js           # Serveur API
│   └── package.json
├── frontend/               # Application React
│   ├── src/
│   │   ├── pages/          # Pages : Création, Dashboard, Admin, Classement
│   │   ├── components/     # StatsPerso, CalendrierTournois
│   │   └── App.jsx
│   └── package.json
└── README.md
```

---

## 🎮 Fonctionnement général

### ✅ Création de joueur

* Nom complet
* Nationalité (choisie ou emoji)
* Style de jeu (ex: attaquant, défenseur, gros serveur…)
* Stocké côté serveur (BDD) et localStorage

---

### 🏟️ Tournois & calendrier

* Saison de **25 semaines** (1 tournoi par semaine)
* Tournois classés : Future, Challenger, ATP250…
* Simulés via le backend Express (par l'admin)

---

### 🧠 Joueurs IA

* Environ **400 IA**
* Répartis en catégories :

  * **Légendes** (ex : top 5)
  * **Champions** (ex : top 20)
  * **Internationaux**
  * **Secondaires**
  * **Futurs**
  * **Prodiges** (potentiel élevé)
* Noms générés selon leur nationalité
* Styles de jeu variés

---

### 🏁 Simuler une semaine

* L’admin clique sur "Simuler la semaine"
* Mise à jour des points ATP
* Résultats des tournois calculés
* IA jouent automatiquement
* Classement mis à jour

---

### 📈 Stats & progression

* Chaque joueur voit :

  * Points ATP
  * Tournois joués / gagnés
  * Ratio victoires
  * Surface favorite
  * Historique de la saison
* Argent utilisé pour :

  * S’entraîner
  * Jouer des matchs d'entraînement
* Progression rapide au début, lente ensuite
* Fatigue + blessure (à venir)

---

## 🌍 Multijoueur local

### Héberger le site et backend en local :

1. **Trouver ton IP locale :**

```bash
ipconfig
```

→ Note l’`Adresse IPv4` (ex: `192.168.1.42`)

2. **Démarrer le backend** :

```bash
cd backend
npm install
npm start
```

3. **Démarrer le frontend :**

```bash
cd frontend
npm install
npm run dev -- --host
```

4. **Tes amis peuvent se connecter à** :

```
http://192.168.1.42:5173
```

---

## 🧩 À venir

* Blessures aléatoires + récupération
* Système de fatigue (repos obligatoire)
* Sponsors pour gagner + d’argent
* Matchs en direct (simulation visuelle)
* Système de retraite / jeunes prodiges
* Comparaison entre joueurs humains

---

## 📞 API REST (Express)

| Méthode | URL              | Description                    |
| ------- | ---------------- | ------------------------------ |
| GET     | `/players`       | Liste des joueurs (classement) |
| POST    | `/players`       | Création d’un joueur           |
| GET     | `/calendar`      | Liste des tournois de l’année  |
| POST    | `/simulate-week` | Simule les résultats hebdo     |

---

## 📌 Commandes utiles

```bash
# Lancer backend
cd backend
npm install
npm start

# Lancer frontend
cd frontend
npm install
npm run dev -- --host

# Insérer les tournois
node init_db.js

# Générer les IA
node seed_ia.js
```

---

## 🧑‍🎓 Auteur

Développé pour un usage privé multijoueur entre amis, par thomas clerc.
