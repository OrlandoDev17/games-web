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
            Descubre, explora y descarga los mejores videojuegos gratuitos. Tu
            biblioteca gaming definitiva te espera.
          </p>
        </div>
        <div className="botones-contenerdor-home">
          <a href="/Catalogue" className="boton-home">
            Explorar Catálogo
          </a>
          <a href="/auth" className="boton-home">
            Crear Cuenta
          </a>
        </div>
        <div className="bajo-boton-home">
          <div className="imagenes-container">
            <div className="imagen-item">
              <img
                src="./images/juegos-disponibles-home.jpg"
                alt="Descripción 1"
                className="imagen-redonda"
              />
              <p>Gran cantidad de juegos disponibles</p>
            </div>
            <div className="imagen-item">
              <img
                src="./images/jugadores-activos-home.jpg"
                alt="Descripción 2"
                className="imagen-redonda"
              />
              <p>Con más de 5000+ Usuarios Activos</p>
            </div>
            <div className="imagen-item">
              <img
                src="./images/rating-home.png"
                alt="Descripción 3"
                className="imagen-redonda"
              />
              <p>Con los títulos mejor valorados</p>
            </div>
          </div>
          <h2 className="titulo-adicional">
            Regístrate para comenzar con esta experiencia
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
