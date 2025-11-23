import "./styles/globals.css";
import "./App.css";
import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import InfoModal from "./components/InfoModal/InfoModal.jsx";
import SettingsModal from "./components/SettingsModal/SettingsModal.jsx";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [mode, setMode] = useState("pomodoro");
  const [customDurations, setCustomDurations] = useState({
    pomodoro: 25,
    short: 5,
    long: 15,
  });
  const modeSettings = {
    pomodoro: {
      color: "#d95550",
      duration: customDurations.pomodoro * 60,
      label: "Pomodoro",
    },
    short: {
      color: "#4fa3a5",
      duration: customDurations.short * 60,
      label: "Short Break",
    },
    long: {
      color: "#457ca3",
      duration: customDurations.long * 60,
      label: "Long Break",
    },
  };

  const currentColor = modeSettings[mode].color;

  return (
    <div className="app-container" style={{ backgroundColor: currentColor }}>
      <Header
        onInfoClick={() => setInfoOpen(true)}
        color={currentColor}
        onSettingsClick={() => setSettingsOpen(true)}
      />

      {infoOpen && <InfoModal onClose={() => setInfoOpen(false)} />}

      {settingsOpen && (
        <SettingsModal
          onClose={() => setSettingsOpen(false)}
          durations={customDurations}
          setDurations={setCustomDurations}
        />
      )}

      <main className="timer-wrapper">
        <div className="timer-frame">
          <PomodoroTimer
            mode={mode}
            setMode={setMode}
            modeSettings={modeSettings}
          />
        </div>
      </main>

      <Footer color={currentColor} />
    </div>
  );
}
