import "./Header.css";

export default function Header({ onInfoClick, color }) {
  return (
    <header className="app-header" style={{ backgroundColor: color }}>
      <nav>
        <ul>
          <li className="logo">🍅 Pomodoro Productivity App</li>

          <li>
            <button className="nav-btn" onClick={onInfoClick}>
              How Pomodoro works
            </button>
          </li>

          <li>
            <button className="nav-btn">Toggle Theme</button>
          </li>

          <li>
            <button className="nav-btn">Settings</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
