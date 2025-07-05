import "../styles/Card.css";
import { StarIcon } from "./Icons";
import { HeartIcon, HeartFillIcon } from "./Icons";
import { useFavorites } from "../context/FavoriteContext";

export default function Card({
  id,
  image,
  rating,
  name,
  developers,
  genre,
  year,
  platform,
}) {
  // Obtener el estado de favoritos y la función para alternar del contexto
  const { favorites, toggleFavorite } = useFavorites();

  // Determinar si el juego actual está en favoritos
  const isFavorite = favorites.includes(id);

  return (
    <article className="card">
      <header className="card-header">
        <img
          className="card-image"
          src={image}
          alt={`Portada de ${name}`}
          loading="lazy"
          itemProp="image"
        />

        <div className="card-rating-container">
          <span
            className="card-rating"
            aria-label={`Puntuación: ${rating} de 5`}
          >
            <StarIcon className="card-star-icon" aria-hidden="true" />
            <span
              itemProp="aggregateRating"
              itemScope
              itemType="https://schema.org/AggregateRating"
            >
              <span itemProp="ratingValue">{rating}</span>
              <meta itemProp="bestRating" content="5" />
            </span>
          </span>

          <button
            onClick={() => toggleFavorite(id)}
            className="card-favorite"
            aria-label={
              isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"
            }
            aria-pressed={isFavorite}
          >
            {isFavorite ? (
              <HeartFillIcon
                className="card-heart-icon-fill"
                aria-hidden="true"
              />
            ) : (
              <HeartIcon className="card-heart-icon" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>
      <div className="card-body">
        <h3 className="card-name" itemProp="name">
          {name}
        </h3>

        <span
          className="card-developers"
          itemProp="author"
          itemScope
          itemType="https://schema.org/Organization"
        >
          {developers}
        </span>

        <span className="card-genre" itemProp="genre">
          {genre}
        </span>
        <span className="card-platform" itemProp="gamePlatform">
          {platform}
        </span>

        <span className="card-year" itemProp="datePublished">
          {year}
        </span>
      </div>

      <footer className="card-footer">
        <button
          className="card-button"
          onClick={() => {
            console.log(`Ver más información de: ${name}`);
          }}
          aria-label={`Ver más información sobre ${name}`}
        >
          Ver Más
        </button>
      </footer>
    </article>
  );
}
