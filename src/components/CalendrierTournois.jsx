import { useEffect, useState } from "react";
import axios from "axios";

export default function CalendrierTournois() {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/calendar")
      .then(res => setCalendar(res.data))
      .catch(err => console.error("Erreur chargement calendrier", err));
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Calendrier des prochaines semaines 📅</h2>
      <ul className="space-y-2">
        {calendar.map(t => (
          <li key={t.id} className="p-3 border rounded bg-white shadow">
            Semaine {t.week} — {t.name} ({t.category}) sur {t.surface}
          </li>
        ))}
      </ul>
    </div>
  );
}
