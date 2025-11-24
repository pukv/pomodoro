import "./PomodoroTimer.css";
import { useState, useEffect } from "react";

export default function PomodoroTimer({ mode, setMode, modeSettings }) {
  const [timer, setTimer] = useState(modeSettings[mode].duration);
  const [isRunning, setIsRunning] = useState(false);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  const LONG_BREAK_INTERVAL = 4;

  const switchMode = (newMode) => {
    if (!modeSettings[newMode]) return;
    setMode(newMode);
  };

  useEffect(() => {
    if (!modeSettings[mode]) return; // safety
    setTimer(modeSettings[mode].duration);
    setIsRunning(false);
  }, [mode, modeSettings]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimer((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (!modeSettings[mode]) return;

    document.title = `${modeSettings[mode].label} | ${formatTime(timer)}`;
  }, [timer, mode, modeSettings]);

  useEffect(() => {
    if (timer !== 0 || !isRunning) return;

    setIsRunning(false);

    setTimeout(() => {
      if (mode === "pomodoro") {
        const nextCount = completedPomodoros + 1;
        const takeLongBreak = nextCount % LONG_BREAK_INTERVAL === 0;

        setCompletedPomodoros(nextCount);
        switchMode(takeLongBreak ? "longBreak" : "shortBreak");
      } else {
        switchMode("pomodoro");
      }
    }, 50);
  }, [timer]);

  // Helper
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
            onClick={() => switchMode(m)}
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
