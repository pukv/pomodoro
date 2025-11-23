import "./InfoModal.css";

export default function InfoModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>How PixelDoro Works</h2>
        <p>PixelDoro uses the Pomodoro Technique to help you stay focused.</p>
        <ul>
          <li>Work for 25 minutes.</li>
          <li>Take a short 5-minute break.</li>
          <li>Every 4 cycles, take a long break.</li>
        </ul>

        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
