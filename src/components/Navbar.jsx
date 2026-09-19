import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>
        <span>GYM</span>TRACK
      </h2>

      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/rutinas" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Rutinas
          </NavLink>
        </li>
        <li>
          <NavLink to="/planes" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Planes
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
