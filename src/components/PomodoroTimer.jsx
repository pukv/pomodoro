import "./PomodoroTimer.css";

export default function PomodoroTimer() {
  return (
    <div className="timer--container">
      <div className="controls">
        <button>Pomodoro</button>
        <button>Short Break</button>
        <button>Long Break</button>
      </div>
      <h2 className="mode-label">Pomodoro</h2>
      <div className="timer--main">
        <p className="timer-display">25:00</p>
        <div className="timer-buttons">
          <button>Start</button>
          <button>Reset</button>
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
