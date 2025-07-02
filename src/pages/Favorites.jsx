import "../styles/FavoritePage.css";
export default function Favorites() {
  return (
    <>
      <section className="favorite-page">
        <h2>
          Mis Favoritos{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="icon icon-tabler icons-tabler-filled icon-tabler-heart"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
          </svg>{" "}
        </h2>

        <h4 className="subtitle">Aún no tienes juegos favoritos</h4>

        <div className="center-icon-svg">
          <div className="icon-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="94"
              height="94"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-heart"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
          </div>
        </div>

        <div className="no-favorite-page">
          <h3>Aún no tienes juegos favoritos</h3>

          <p>
            Explora nuestro Catálogo y marca tus juegos favoritos haciendo click
            en el corazón
          </p>

          <div className="button-container">
            <button>Explorar Catálogo</button>
          </div>
        </div>

        <div className="Cards-games">
          <div className="game-image-placeholder">
            <img
              src="/src/img/CyberPunk.jpeg"
              alt="Imagen del Juego"
              width="320"
              height="190"
            />
          </div>

          <div className="game-info">
            <h3>CyberPunk 2077</h3>

            <spam>CD Projekt RED</spam>

            <p className="game-tags">Género RPG | Plataforma PC</p>

            <p className="game-year">Año 2077</p>

            <div className="card-actions">
              <button className="download-button">Descargar Gratis</button>

              <button className="remove-button">
                <span className="trash-icon">🗑️</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
