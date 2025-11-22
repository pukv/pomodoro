import "./PomodoroTimer.css";
import { useState, useEffect } from "react";

export default function PomodoroTimer() {
  const [timer, setTimer] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

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

  return (
    <div className="timer--container">
      <div className="controls">
        <button className="pomodoro--start">Pomodoro</button>
        <button className="pomodoro--short-break">Short Break</button>
        <button className="pomodoro--long-break">Long Break</button>
      </div>
      <h2 className="mode-label">Pomodoro</h2>
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
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
      <div className="session-stats">
        <p>
          Completed Pomodoros: <span>0</span>
        </p>
      </div>
    </div>
  );
}
