import tomatoImg from "../../assets/tomato.png";
import "./Header.css";

export default function Header({ onInfoClick, onSettingsClick }) {
  return (
    <header className="header">
      <div className="header-title">
        <img src={tomatoImg} alt="Tomato" className="tomato-icon" />
        <span>PixelDoro</span>
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
