import "./styles/globals.css";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import InfoModal from "./components/InfoModal/InfoModal.jsx";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [mode, setMode] = useState("pomodoro");

  const modeSettings = {
    pomodoro: { color: "#d95550" },
    short: { color: "#4fa3a5" },
    long: { color: "#457ca3" },
  };

  return (
    <div
      className="app-wrapper"
      style={{ backgroundColor: modeSettings[mode].color }}
    >
      <Header
        onInfoClick={() => setInfoOpen(true)}
        color={modeSettings[mode].color}
      />

      {infoOpen && <InfoModal onClose={() => setInfoOpen(false)} />}

      <PomodoroTimer mode={mode} setMode={setMode} />

      <Footer color={modeSettings[mode].color} />
    </div>
  );
}
