import "./Header.css";

export default function Header({ onInfoClick, onSettingsClick }) {
  return (
    <header className="header">
      <div className="header-title">
        🍅 <span>PixelDoro</span>
      </div>
      <div className="header--buttons">
        <button className="info-button" onClick={onInfoClick}>
          ❓
        </button>

        <button className="settings-button" onClick={onSettingsClick}>
          ⚙️
        </button>
      </div>
    </header>
  );
}
