import { Routes, Route } from "react-router-dom";
import CreatePlayer from "./pages/CreatePlayer";
import Dashboard from "./pages/Dashboard";
import Ranking from "./pages/Ranking";
import AdminPanel from "./pages/AdminPanel";
import AdminPlayers from "./pages/AdminPlayers";




function App() {
  return (
    <Routes>
      <Route path="/" element={<CreatePlayer />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/admin/players" element={<AdminPlayers />} />
    </Routes>
  );
}

export default App;