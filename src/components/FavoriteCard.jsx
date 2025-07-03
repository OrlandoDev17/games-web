import { useFavorites } from "../context/FavoriteContext";
import Card from "./Card";
import games from "../data/juegos.json";

export default function FavoriteCard() {
  const { favorites } = useFavorites();

  const favoriteGames = games.filter((game) => favorites.includes(game.id));

  return (
    <div className="favorite-card">
      {favoriteGames.map((game) => (
        <Card
          key={game.id}
          id={game.id}
          image={game.image}
          rating={game.rating}
          name={game.name}
          developers={game.developers}
          genre={game.genre}
          year={game.year}
          platform={game.platform}
        />
      ))}
    </div>
  );
}
