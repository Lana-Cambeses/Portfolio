import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className={`navbar ${active ? "active" : ""}`}>
      <div className="menu-toggle" onClick={() => setActive(!active)}>
        <span></span><span></span><span></span>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Game Demos</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
