import "../styles/Catalogue.css";
import Filters from "../components/Filters";
import { useState } from "react";
import GAMES from "../data/juegos.json";
import CardsContainer from "../components/CardsContainer";

export default function Catalogue() {
  const [games] = useState(GAMES);
  const [filters, setFilters] = useState({
    genre: "all",
    platform: "all",
  });

  const filterGames = (games) => {
    return games.filter((game) => {
      return (
        filters.genre === "all" ||
        (game.genre === filters.genre && filters.platform === "all") ||
        game.platform.includes(filters.platform)
      );
    });
  };

  const filteredGames = filterGames(games);

  return (
    <section className="catalogue-container">
      <header className="catalogue-header">
        <h2>Catálogo de Juegos</h2>
        <p>Descubre y descarga tu proximo juego favorito gratis</p>
      </header>
      <Filters changeFilters={setFilters} />
      <CardsContainer games={filteredGames} />
    </section>
  );
}
