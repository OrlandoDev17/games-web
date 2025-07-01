import { FaGamepad, FaHome, FaRegStar, FaThList, FaUser } from 'react-icons/fa';
import '../assets/navbar.css';

export default function Navbar({ selected = "inicio" }) {
  const navItems = [
    { key: "inicio", label: "Inicio", icon: <FaHome /> },
    { key: "catalogo", label: "Catálogo", icon: <FaThList /> },
    { key: "favoritos", label: "Favoritos", icon: <FaRegStar /> },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaGamepad size={28} color="#7B6EF6" style={{ marginRight: 8 }} />
        <span className="navbar-title">GameHub</span>
      </div>
      <div className="navbar-links">
        {navItems.map(item => (
          <a
            key={item.key}
            href="#"
            className={selected === item.key ? "navbar-link active" : "navbar-link"}
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </div>
      <button className="navbar-btn">
        <FaUser /> Iniciar Sesión
      </button>
    </nav>
  );
} 