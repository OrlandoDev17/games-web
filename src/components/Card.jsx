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
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <article className="card">
      <header className="card-header">
        <img className="card-image" src={image} alt={name} />
        <div className="card-rating-container">
          <span className="card-rating">
            <StarIcon className="card-star-icon" /> {rating}
          </span>
          <button onClick={() => toggleFavorite(id)} className="card-favorite">
            {favorites.includes(id) ? (
              <HeartFillIcon className="card-heart-icon-fill" />
            ) : (
              <HeartIcon className="card-heart-icon" />
            )}
          </button>
        </div>
      </header>
      <div className="card-body">
        <h3 className="card-name">{name}</h3>
        <span className="card-developers">{developers}</span>
        <span className="card-genre">{genre}</span>
        <span className="card-platform">{platform}</span>
        <span className="card-year">{year}</span>
      </div>
      <footer className="card-footer">
        <button className="card-button">Ver Más</button>
      </footer>
    </article>
  );
}
