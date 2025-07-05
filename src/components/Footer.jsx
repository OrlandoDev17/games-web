import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-desc">Hecho con pasión por los videojuegos.</p>
          <p className="footer-copyright">
            © {new Date().getFullYear()} GameHub. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
