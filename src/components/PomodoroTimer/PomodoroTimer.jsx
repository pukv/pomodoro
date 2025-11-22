import "./PomodoroTimer.css";
import { useState, useEffect } from "react";

export default function PomodoroTimer({ mode, setMode }) {
  const modeSettings = {
    pomodoro: { duration: 1500, label: "Pomodoro" },
    short: { duration: 300, label: "Short Break" },
    long: { duration: 900, label: "Long Break" },
  };

  const [timer, setTimer] = useState(modeSettings[mode].duration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTimer(modeSettings[mode].duration);
    setIsRunning(false);
  }, [mode]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimer((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  return (
    <div className="timer--container">
      <div className="controls">
        {Object.keys(modeSettings).map((m) => (
          <button
            key={m}
            className={`control-btn ${mode === m ? "active" : ""}`}
            onClick={() => setMode(m)}
          >
            {modeSettings[m].label}
          </button>
        ))}
      </div>

      <h2 className="mode-label">{modeSettings[mode].label}</h2>

      <div className="timer--main">
        <p className="timer-display">{formatTime(timer)}</p>

        <div className="timer-buttons">
          <button onClick={() => setIsRunning(true)}>Start</button>
          <button
            onClick={() => {
              setTimer(modeSettings[mode].duration);
              setIsRunning(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
