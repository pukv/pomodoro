import "./PomodoroTimer.css";
import { useState, useEffect } from "react";

export default function PomodoroTimer() {
  const modeSettings = {
    pomodoro: {
      duration: 1500,
      color: "#d95550",
      label: "Pomodoro",
    },
    short: {
      duration: 300,
      color: "#4fa3a5",
      label: "Short Break",
    },
    long: {
      duration: 900,
      color: "#457ca3",
      label: "Long Break",
    },
  };

  const [timer, setTimer] = useState(modeSettings.pomodoro.duration);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("pomodoro");

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimer((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  function handleModeChange(newMode) {
    setMode(newMode);
    setTimer(modeSettings[newMode].duration);
    setIsRunning(false);
  }

  return (
    <div
      className="timer--container"
      style={{ backgroundColor: modeSettings[mode].color }}
    >
      <div className="controls">
        <button
          className={mode === "pomodoro" ? "control-btn active" : "control-btn"}
          onClick={() => handleModeChange("pomodoro")}
        >
          Pomodoro
        </button>
        <button
          className={mode === "short" ? "control-btn active" : "control-btn"}
          onClick={() => handleModeChange("short")}
        >
          Short Break
        </button>
        <button
          className={mode === "long" ? "control-btn active" : "control-btn"}
          onClick={() => handleModeChange("long")}
        >
          Long Break
        </button>
      </div>
      <h2 className="mode-label">{modeSettings[mode].label}</h2>
      <div className="timer--main">
        <p className="timer-display">{formatTime(timer)}</p>
        <div className="timer-buttons">
          <button className="timer--start" onClick={() => setIsRunning(true)}>
            Start
          </button>
          <button
            className="timer--reset"
            onClick={() => {
              setTimer(1500);
              setIsRunning(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="session-stats">
        <p>
          Completed Pomodoros: <span>0</span>
        </p>
      </div>
    </div>
  );
}
