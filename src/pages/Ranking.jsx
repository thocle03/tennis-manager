import { useEffect, useState } from "react";

export default function Ranking() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers([
      { rank: 1, name: "Léo Gonzalez", nation: "🇪🇸", points: 12000 },
      { rank: 2, name: "Maxime Dupont", nation: "🇫🇷", points: 11000 },
      { rank: 3, name: "Elias Becker", nation: "🇩🇪", points: 9500 },
      { rank: 250, name: "Moi (Humain)", nation: "🇫🇷", points: 70 }
    ]);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Classement mondial 🏆</h1>
      <table className="w-full text-left border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">#</th>
            <th className="p-2">Joueur</th>
            <th className="p-2">Nation</th>
            <th className="p-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{p.rank}</td>
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.nation}</td>
              <td className="p-2">{p.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}