import { FaGamepad, FaHome, FaRegStar, FaThList, FaUser } from "react-icons/fa";
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
      <Link to="/" className="navbar-logo">
        <FaGamepad size={28} color="#7B6EF6" style={{ marginRight: 8 }} />
        <span className="navbar-title">GameHub</span>
      </Link>
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
      <Link to="/auth" className="navbar-btn">
        <FaUser /> Iniciar Sesión
      </Link>
    </nav>
  );
}
