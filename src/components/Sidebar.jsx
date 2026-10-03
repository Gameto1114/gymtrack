import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import "./Sidebar.css";

function Sidebar() {
  const { usuario } = useAuth();

  return (
    <aside className="sidebar">
      <div className="sidebar-user">
        <div className="sidebar-avatar">{usuario.nombre.charAt(0)}</div>
        <div>
          <p className="sidebar-name">{usuario.nombre}</p>
          <p className="sidebar-role">{usuario.rol}</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <Link to="/">Inicio</Link>
        <Link to="/rutinas">Rutinas</Link>
        <Link to="/planes">Planes</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
