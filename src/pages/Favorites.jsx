import FavoriteCard from "../components/FavoriteCard";
import "../styles/FavoritePage.css";
import "../styles/FavoriteCardsGrid.css";
import "../styles/Footer.css";
import "../styles/Navbar.css";
import { useFavorites } from "../context/FavoriteContext";
export default function Favorites() {
  const { favorites } = useFavorites();
  return (
    <section className="favorite-page">
      <h2>Mis Favoritos</h2>
      <p className="subtitle">
        {favorites.length === 0
          ? "Aun no tienes juegos en Favoritos"
          : `tienes ${favorites.length} Juegos en Favoritos`}
      </p>
      {favorites.length === 0 ? (
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
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

            <div>
              <a href="/Catalogue" className="button-catalogue">Explorar Catálogo</a>
            </div>
          </div>
        </>
      ) : (
        <FavoriteCard />
      )}
    </section>
  );
}
