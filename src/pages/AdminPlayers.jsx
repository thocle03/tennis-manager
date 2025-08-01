import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPlayers() {
  const [players, setPlayers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3001/players")
      .then(res => setPlayers(res.data))
      .catch(err => alert("Erreur chargement joueurs"));
  }, []);

  const handleEdit = (player) => {
    setEditId(player.id);
    setForm({ ...player });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await axios.put(`http://localhost:3001/players/${editId}`, form);
    window.location.reload(); // simple pour recharger
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">👨‍💼 Admin - Gestion des Joueurs</h1>
      <table className="w-full text-sm border">
        <thead>
          <tr className="bg-gray-100">
            <th>ID</th>
            <th>Nom</th>
            <th>Nation</th>
            <th>Style</th>
            <th>Pts</th>
            <th>$</th>
            <th>Niv</th>
            <th>Âge</th>
            <th>Potentiel</th>
            <th>Train Pts</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <tr key={p.id} className="border-t">
              {editId === p.id ? (
                <>
                  <td>{p.id}</td>
                  <td><input name="name" value={form.name} onChange={handleChange} className="border w-full" /></td>
                  <td><input name="nationality" value={form.nationality} onChange={handleChange} className="border w-full" /></td>
                  <td><input name="style" value={form.style} onChange={handleChange} className="border w-full" /></td>
                  <td><input name="points" value={form.points} onChange={handleChange} className="border w-full" /></td>
                  <td><input name="money" value={form.money} onChange={handleChange} className="border w-full" /></td>
                  <td><input name="level" value={form.level} onChange={handleChange} className="border w-full" /></td>
                  <td><input name="age" value={form.age} onChange={handleChange} className="border w-full" /></td>
                  <td><input name="potential" value={form.potential} onChange={handleChange} className="border w-full" /></td>
                  <td><input name="training_pts" value={form.training_pts} onChange={handleChange} className="border w-full" /></td>
                  <td><button className="bg-green-600 text-white px-3 py-1 rounded" onClick={handleSave}>💾</button></td>
                </>
              ) : (
                <>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.nationality}</td>
                  <td>{p.style}</td>
                  <td>{p.points}</td>
                  <td>{p.money}</td>
                  <td>{p.level}</td>
                  <td>{p.age}</td>
                  <td>{p.potential}</td>
                  <td>{p.training_pts}</td>
                  <td><button className="text-blue-600 underline" onClick={() => handleEdit(p)}>✏️</button></td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
