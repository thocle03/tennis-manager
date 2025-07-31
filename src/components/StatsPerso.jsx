export default function StatsPerso({ stats }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Statistiques personnelles 📊</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Tournois joués : {stats.tournois}</li>
        <li>Victoires : {stats.victoires}</li>
        <li>Défaites : {stats.defaites}</li>
        <li>Ratio victoire : {(stats.victoires / Math.max(stats.tournois, 1) * 100).toFixed(1)}%</li>
        <li>Surface favorite : {stats.surface}</li>
      </ul>
    </div>
  );
}
