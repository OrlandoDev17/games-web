import {
  FaGamepad,
  FaHome,
  FaRegStar,
  FaThList,
  FaUser,
  FaBars,
} from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: "/", key: "inicio", label: "Inicio", icon: <FaHome /> },
    {
      path: "/catalogue",
      key: "catalogo",
      label: "Catálogo",
      icon: <FaThList />,
    },
    {
      path: "/favorites",
      key: "favoritos",
      label: "Favoritos",
      icon: <FaRegStar />,
    },
  ];

  // Función para verificar si la ruta actual coincide con el ítem de navegación
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <picture>
          <Link to="/" className="navbar-logo">
            <FaGamepad size={28} color="#7B6EF6" style={{ marginRight: 8 }} />
            <span className="navbar-title">GameHub</span>
          </Link>
        </picture>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          <FaBars />
        </label>

        <div className="navbar-content">
          <div className="navbar-links">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`navbar-link ${isActive(item.path) ? "active" : ""}`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <Link to="/auth" className="navbar-btn">
              <FaUser /> Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
