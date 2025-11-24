import "./SettingsModal.css";
import { useState } from "react";

export default function SettingsModal({ onClose, durations, setDurations }) {
  const [pomodoro, setPomodoro] = useState(durations.pomodoro);
  const [shortBreak, setShortBreak] = useState(durations.shortBreak);
  const [longBreak, setLongBreak] = useState(durations.longBreak);

  const handleSubmit = (e) => {
    e.preventDefault();

    setDurations({
      pomodoro: Number(pomodoro),
      shortBreak: Number(shortBreak),
      longBreak: Number(longBreak),
    });

    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Customize Your Session</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="pomodoro--length">Pomodoro Length (min)</label>
          <input
            type="number"
            id="pomodoro--length"
            value={pomodoro}
            onChange={(e) => setPomodoro(e.target.value)}
          />

          <label htmlFor="short-break--length">Short Break Length (min)</label>
          <input
            type="number"
            id="short-break--length"
            value={shortBreak}
            onChange={(e) => setShortBreak(e.target.value)}
          />

          <label htmlFor="long-break--length">Long Break Length (min)</label>
          <input
            type="number"
            id="long-break--length"
            value={longBreak}
            onChange={(e) => setLongBreak(e.target.value)}
          />

          <div className="settings-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
