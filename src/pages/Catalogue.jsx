import "../styles/Catalogue.css";
import Filters from "../components/Filters";
import { useState, useMemo, useCallback } from "react";
import GAMES from "../data/juegos.json";
import Card from "../components/Card";

/**
 * Componente principal del catálogo de juegos.
 * Muestra una lista filtrable de juegos con opciones de búsqueda y filtrado.
 */
export default function Catalogue() {
  const [filters, setFilters] = useState({
    genre: "all",
    platform: "all",
    search: "",
  });

  const filterGames = useCallback(
    (games) => {
      const searchTerm = filters.search.toLowerCase();
      const platformTerm = filters.platform.toLowerCase();

      return games.filter((game) => {
        const genreMatch =
          filters.genre === "all" || game.genre === filters.genre;

        let platformMatch = false;
        if (filters.platform === "all") {
          platformMatch = true;
        } else if (Array.isArray(game.platform)) {
          platformMatch = game.platform.some(
            (platform) =>
              typeof platform === "string" &&
              platform.toLowerCase().includes(platformTerm)
          );
        } else {
          platformMatch = game.platform.toLowerCase().includes(platformTerm);
        }

        const searchMatch = game.name.toLowerCase().includes(searchTerm);
        return genreMatch && platformMatch && searchMatch;
      });
    },
    [filters.genre, filters.platform, filters.search]
  );

  const filteredGames = useMemo(() => {
    return filterGames(GAMES);
  }, [filterGames]);

  return (
    <section
      className="catalogue-container"
      role="main"
      aria-label="Catálogo de juegos"
    >
      <header className="catalogue-header">
        <h1 className="catalogue-title">Catálogo de Juegos</h1>
        <p className="catalogue-description">
          Descubre y descarga tu próximo juego favorito gratis
        </p>
      </header>

      <Filters changeFilters={setFilters} currentSearch={filters.search} />

      <div className="catalogue-grid" role="list" aria-label="Lista de juegos">
        {filteredGames.length > 0 ? (
          filteredGames.map(
            ({
              id,
              name,
              image,
              rating,
              developers,
              genre,
              year,
              platform,
            }) => (
              <article
                key={id}
                className="game-card"
                role="listitem"
                itemScope
                itemType="https://schema.org/VideoGame"
              >
                <Card
                  id={id}
                  image={image}
                  rating={rating}
                  name={name}
                  developers={developers}
                  genre={genre}
                  year={year}
                  platform={platform}
                />
              </article>
            )
          )
        ) : (
          <div className="no-results">
            <p>
              No se encontraron juegos que coincidan con los filtros
              seleccionados.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
