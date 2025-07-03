import FavoriteCard from "../components/FavoriteCard";
import "../styles/FavoritePage.css";
import { useFavorites } from "../context/FavoriteContext";
export default function Favorites() {
  const { favorites } = useFavorites();
  return (
    <>
      <section className="favorite-page">
        <h2>Mis Favoritos</h2>

        <h4 className="subtitle">Aún no tienes juegos favoritos</h4>

        {favorites.length === 1 ? (
          <>
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
                Explora nuestro Catálogo y marca tus juegos favoritos haciendo
                click en el corazón
              </p>

              <div className="button-container">
                <button>Explorar Catálogo</button>
              </div>
            </div>
          </>
        ) : (
          <FavoriteCard />
        )}
      </section>
    </>
  );
}
