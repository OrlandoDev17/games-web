import { useState } from "react";
import "../styles/Auth.css";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Auth() {
  const [tab, setTab] = useState("login");
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [regUsuario, setRegUsuario] = useState("");
  const [regClave, setRegClave] = useState("");
  const [regClave2, setRegClave2] = useState("");
  const [regMensaje, setRegMensaje] = useState("");
  const navigate = useNavigate();

  const usuarioValido = "adminUneti";
  const claveValida = "Uneti2025.";

  // Función para obtener usuarios del localStorage
  const getUsuarios = () => {
    const data = localStorage.getItem("usuarios");
    return data ? JSON.parse(data) : [];
  };

  // Función para guardar usuarios en localStorage
  const saveUsuarios = (usuarios) => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  };

  // Login
  const handleLogin = (e) => {
    e.preventDefault();
    const usuarios = getUsuarios();
    const existe = usuarios.find(
      (u) => u.usuario === usuario && u.clave === clave
    );
    if (existe) {
      setMensaje("¡Login exitoso!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else if (usuario === usuarioValido && clave === claveValida) {
      setMensaje("¡Login exitoso!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setMensaje("Usuario o clave incorrectos");
    }
  };

  // Registro
  const handleRegister = (e) => {
    e.preventDefault();
    if (!regUsuario || !regClave || !regClave2) {
      setRegMensaje("Completa todos los campos");
      return;
    }
    if (regClave !== regClave2) {
      setRegMensaje("Las contraseñas no coinciden");
      return;
    }
    const usuarios = getUsuarios();
    if (usuarios.find((u) => u.usuario === regUsuario)) {
      setRegMensaje("El usuario ya existe");
      return;
    }
    usuarios.push({ usuario: regUsuario, clave: regClave });
    saveUsuarios(usuarios);
    setRegMensaje("¡Registro exitoso! Ahora puedes iniciar sesión.");
    setRegUsuario("");
    setRegClave("");
    setRegClave2("");
    setTimeout(() => {
      setTab("login");
      setRegMensaje("");
    }, 1200);
  };

  return (
    <div className="auth-bg">
      <div className="auth-main">
        <div className="auth-logo">
          <span className="auth-logo-icon">🎮</span>
        </div>
        <h2 className="auth-title">Bienvenido a GameHub</h2>
        <p className="auth-subtitle">Accede a tu biblioteca gaming</p>
        <div className="auth-tabs">
          <button
            onClick={() => {
              setTab("login");
              setMensaje("");
            }}
            className={tab === "login" ? "auth-tab active" : "auth-tab"}
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => {
              setTab("register");
              setRegMensaje("");
            }}
            className={tab === "register" ? "auth-tab active" : "auth-tab"}
          >
            Registrarse
          </button>
        </div>
        <div className="auth-form-container">
          {tab === "login" ? (
            <form onSubmit={handleLogin}>
              <h3 className="auth-form-title">Iniciar Sesión</h3>
              <p className="auth-form-desc">
                Ingresa con tus credenciales para acceder
              </p>
              <div className="auth-form-group">
                <label className="auth-label">Usuario</label>
                <div className="auth-input-wrapper">
                  <span className="auth-input-icon">👤</span>
                  <input
                    type="text"
                    placeholder="Usuario"
                    className="auth-input"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                  />
                </div>
              </div>
              <div className="auth-form-group">
                <label className="auth-label">Contraseña</label>
                <div className="auth-input-wrapper">
                  <span className="auth-input-icon">🔒</span>
                  <input
                    type="password"
                    placeholder="********"
                    className="auth-input"
                    value={clave}
                    onChange={(e) => setClave(e.target.value)}
                  />
                </div>
              </div>
              <button className="auth-btn" type="submit">
                Iniciar Sesión
              </button>
              {mensaje && <p className="auth-message">{mensaje}</p>}
            </form>
          ) : (
            <form onSubmit={handleRegister}>
              <h3 className="auth-form-title">Registrarse</h3>
              <p className="auth-form-desc">Crea una cuenta para comenzar</p>
              <div className="auth-form-group">
                <label className="auth-label">Usuario</label>
                <div className="auth-input-wrapper">
                  <span className="auth-input-icon">👤</span>
                  <input
                    type="text"
                    placeholder="Usuario"
                    className="auth-input"
                    value={regUsuario}
                    onChange={(e) => setRegUsuario(e.target.value)}
                  />
                </div>
              </div>
              <div className="auth-form-group">
                <label className="auth-label">Contraseña</label>
                <div className="auth-input-wrapper">
                  <span className="auth-input-icon">🔒</span>
                  <input
                    type="password"
                    placeholder="********"
                    className="auth-input"
                    value={regClave}
                    onChange={(e) => setRegClave(e.target.value)}
                  />
                </div>
              </div>
              <div className="auth-form-group">
                <label className="auth-label">Confirmar Contraseña</label>
                <div className="auth-input-wrapper">
                  <span className="auth-input-icon">🔒</span>
                  <input
                    type="password"
                    placeholder="********"
                    className="auth-input"
                    value={regClave2}
                    onChange={(e) => setRegClave2(e.target.value)}
                  />
                </div>
              </div>
              <button className="auth-btn" type="submit">
                Registrarse
              </button>
              {regMensaje && <p className="auth-message">{regMensaje}</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
