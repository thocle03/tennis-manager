import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CalendrierTournois from "../components/CalendrierTournois";
import StatsPerso from "../components/StatsPerso";

export default function Dashboard() {
  const [player, setPlayer] = useState(null);
  const [money, setMoney] = useState(1500);
  const [trainingCost] = useState(300);
  const [skills, setSkills] = useState({
    service: 45,
    retour: 40,
    mental: 50,
    endurance: 42
  });

  useEffect(() => {
    const p = JSON.parse(localStorage.getItem("player"));
    if (p) setPlayer(p);
  }, []);

  const handleTrain = () => {
    if (money < trainingCost) return alert("Pas assez d'argent pour s'entraîner !");
    setMoney(m => m - trainingCost);
    setSkills(s => ({ ...s, service: s.service + 1, retour: s.retour + 1 }));
    alert("Tu t'es entraîné avec succès ! 📈");
  };

  const handleMatch = () => {
    if (money < 200) return alert("Pas assez d'argent pour un match !");
    setMoney(m => m - 200);
    alert("Match d'entraînement terminé. Bonus d'expérience modéré.");
  };

  if (!player) return <p>Chargement...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Bienvenue {player.firstName} {player.lastName}</h1>
      <p className="mb-2">Nation : {player.nationality} | Style : {player.style}</p>
      <p className="mb-2">💰 Argent : {money} €</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Caractéristiques 🎾</h2>
      <ul className="mb-6">
        {Object.entries(skills).map(([key, val]) => (
          <li key={key}>{key} : {val}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Actions</h2>
      <button onClick={handleTrain} className="bg-green-600 text-white px-4 py-2 mr-4 rounded">S'entraîner ({trainingCost} €)</button>
      <button onClick={handleMatch} className="bg-yellow-600 text-white px-4 py-2 rounded">Match d'entraînement (200 €)</button>

      <div className="mt-8">
        <Link to="/ranking" className="text-blue-700 underline mr-4">Voir classement mondial</Link>
        <Link to="/admin" className="text-purple-700 underline">Admin</Link>
      </div>
      <StatsPerso stats={{
          tournois: 3,
          victoires: 2,
          defaites: 1,
          surface: "Terre battue"
            }} />

      <CalendrierTournois />
    </div>
    
  );
}