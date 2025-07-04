import "./styles/App.css";
function App() {
  return (
    <div className="pc-home">
      <div>
        <h1 className="title-home">
          <span className="texto-parte1">Games</span>
          <span className="texto-parte2">Hub</span>
        </h1>
        <div className="texto-bajo-home">
          <p>
            Descubre, explora y descarga los mejores videojuegos gratuitos. Tu biblioteca gaming definitiva te espera.
          </p>
        </div>
        <div className="botones-contenerdor-home">
          <button className="boton-home">Explorar Catálogo</button>
          <button className="boton-home">Crear Cuenta</button>
        </div>
        <div className="bajo-boton-home">
          <div className="imagenes-container">
            <div className="imagen-item">
              <img src="https://e7.pngegg.com/pngimages/147/893/png-clipart-joystick-game-controller-video-game-icon-video-game-controller-monochrome-video-game-thumbnail.png" alt="Descripción 1" className="imagen-redonda" />
              <p>Gran cantidad de juegos disponibles</p>
            </div>
            <div className="imagen-item">
              <img src="https://c0.klipartz.com/pngpicture/117/752/gratis-png-iconos-de-computadora-usuario-icono-de-diseno-numerosos.png" alt="Descripción 2" className="imagen-redonda" />
              <p>Con más de 5000+ Usuarios Activos</p>
            </div>
            <div className="imagen-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOb1Hub8L3F4-SCImDaGjbmDnOSJb4vFyYew&s" alt="Descripción 3" className="imagen-redonda" />
              <p>Con los títulos mejor valorados</p>
            </div>
          </div>
          <h2 className="titulo-adicional">Regístrate para comenzar con esta experiencia</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
