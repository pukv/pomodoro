import "./Footer.css";

export default function Footer({ color }) {
  return (
    <footer className="app-footer" style={{ backgroundColor: color }}>
      <p>Made with coffee using React • Pomodoro App</p>
    </footer>
  );
}
