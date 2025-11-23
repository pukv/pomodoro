import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <span role="img" aria-label="tomato-icon">
          🍅
        </span>
        <span>PixelDoro</span>
      </div>

      <button className="settings-button" aria-label="Open settings">
        ⚙️
      </button>
    </header>
  );
};

export default Header;
