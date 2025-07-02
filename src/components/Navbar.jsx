import { FaGamepad, FaHome, FaRegStar, FaThList, FaUser } from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar({ selected = "inicio" }) {
  const navItems = [
    { href: "/", key: "inicio", label: "Inicio", icon: <FaHome /> },
    {
      href: "/catalogue",
      key: "catalogo",
      label: "Catálogo",
      icon: <FaThList />,
    },
    {
      href: "/favorites",
      key: "favoritos",
      label: "Favoritos",
      icon: <FaRegStar />,
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaGamepad size={28} color="#7B6EF6" style={{ marginRight: 8 }} />
        <span className="navbar-title">GameHub</span>
      </div>
      <div className="navbar-links">
        {navItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className={
              selected === item.key ? "navbar-link active" : "navbar-link"
            }
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </div>
      <a className="navbar-btn" href="/auth">
        <FaUser /> Iniciar Sesión
      </a>
    </nav>
  );
}
