import "../styles/Catalogue.css";
import Filters from "../components/Filters";
import { useState } from "react";
import GAMES from "../data/juegos.json";
import Card from "../components/Card";

export default function Catalogue() {
  const [games] = useState(GAMES);
  const [filters, setFilters] = useState({
    genre: "all",
    platform: "all",
  });
  const filterGames = (games) => {
    return games.filter((game) => {
      // Verificar el filtro de género
      const genreMatch =
        filters.genre === "all" || game.genre === filters.genre;

      // Verificar el filtro de plataforma
      let platformMatch = false;
      if (filters.platform === "all") {
        platformMatch = true;
      } else if (Array.isArray(game.platform)) {
        // Si la plataforma es un array, verificar si incluye la plataforma seleccionada
        platformMatch = game.platform.some(
          (platform) =>
            typeof platform === "string" &&
            platform.toLowerCase().includes(filters.platform.toLowerCase())
        );
      } else {
        // Si es un string, comparar directamente
        platformMatch = game.platform
          .toLowerCase()
          .includes(filters.platform.toLowerCase());
      }

      // Deben coincidir ambos filtros
      return genreMatch && platformMatch;
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
      <div className="catalogue-grid">
        {filteredGames.map(
          ({ id, name, image, rating, developers, genre, year, platform }) => (
            <Card
              key={id}
              id={id}
              image={image}
              rating={rating}
              name={name}
              developers={developers}
              genre={genre}
              year={year}
              platform={platform}
            />
          )
        )}
      </div>
    </section>
  );
}
