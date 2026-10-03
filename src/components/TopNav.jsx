import { useState } from "react";
import "./TopNav.css";

function TopNav() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <div className="top-nav">
      <input
        type="text"
        className="top-nav-search"
        placeholder="Encuentra tu rutina ideal..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  );
}

export default TopNav;
