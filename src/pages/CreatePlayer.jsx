import { useState } from "react";
import axios from "axios";

export default function CreatePlayer() {
  const [player, setPlayer] = useState({
    name: "",
    nationality: "",
    style: "attaquant",
  });

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/players", player);
      localStorage.setItem("player_id", res.data.id);
      localStorage.setItem("player", JSON.stringify(player));
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Erreur de création : " + err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-6">Créer ton joueur 🎾</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Nom complet" onChange={handleChange} required className="border p-2 rounded" />
        <input name="nationality" placeholder="Nationalité (🇫🇷, 🇪🇸...)" onChange={handleChange} required className="border p-2 rounded" />
        <label className="font-semibold">Style de jeu</label>
        <select name="style" onChange={handleChange} className="border p-2 rounded">
          <option value="attaquant">Attaquant</option>
          <option value="défenseur">Défenseur</option>
          <option value="contreur">Contreur</option>
          <option value="gros_serveur">Gros serveur</option>
          <option value="fond_de_court">Joueur du fond</option>
          <option value="créatif">Créatif</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Créer</button>
      </form>
    </div>
  );
}
