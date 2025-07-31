export default function AdminPanel() {
  const handleSimulate = () => {
    alert("Semaine simulée ! Tournois mis à jour, classement recalculé.");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Interface Admin 👑</h1>
      <p className="mb-4">Utilise ce bouton pour lancer une simulation de la semaine.</p>
      <button onClick={handleSimulate} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
        Simuler la semaine
      </button>
    </div>
  );
}