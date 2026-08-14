import { useState } from "react";
import Game from "./Components/accessGame";
import { Home } from "./pages/home";

function App() {
  const [unlocked, setUnlocked] = useState(false);
  return unlocked ? <Home /> : <Game onWin={() => setUnlocked(true)} />;
}

export default App;
