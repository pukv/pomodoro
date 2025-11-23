import "./Footer.css";

export default function Footer({ color }) {
  return (
    <footer className="app-footer" style={{ backgroundColor: color }}>
      <p>Made with a lot of coffee using React • Pomodoro Productivity App</p>
    </footer>
  );
}
