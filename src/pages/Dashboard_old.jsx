import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [player, setPlayer] = useState(null);
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const p = JSON.parse(localStorage.getItem("player"));
    if (p) setPlayer(p);
    setTournaments([
      { name: "Future Tunisie", surface: "Terre battue", type: "Future", available: true },
      { name: "Challenger Prague", surface: "Dur", type: "Challenger", available: false },
    ]);
  }, []);

  const handleRegister = (name) => {
    alert("Inscrit au tournoi : " + name);
  };

  if (!player) return <p>Chargement...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Bienvenue {player.firstName} {player.lastName}</h1>
      <p className="mb-2">Classement mondial : #999</p>
      <p className="mb-6">Style de jeu : {player.style}</p>

      <h2 className="text-xl font-semibold mb-4">Tournois de la semaine</h2>
      <ul className="space-y-4">
        {tournaments.map((t, index) => (
          <li key={index} className="p-4 border rounded bg-white shadow">
            <div className="font-bold">{t.name}</div>
            <div>Surface : {t.surface}</div>
            <div>Catégorie : {t.type}</div>
            {t.available ? (
              <button onClick={() => handleRegister(t.name)} className="mt-2 bg-green-600 text-white px-3 py-1 rounded">
                S'inscrire
              </button>
            ) : (
              <p className="text-sm text-gray-500 mt-2">Non accessible cette semaine</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}