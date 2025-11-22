import "./Header.css";

export default function Header({ onInfoClick }) {
  return (
    <header>
      <nav>
        <ul>
          <li>🍅 Pomodoro Productivity App</li>
          <li>
            <button className="info--button" onClick={onInfoClick}>
              How Pomodoro works
            </button>
          </li>
          <li>
            <button>Toggle Theme</button>
          </li>
          <li>
            <button>Settings</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
