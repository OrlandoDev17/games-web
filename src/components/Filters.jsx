import "../styles/Filters.css";

// Lista de plataformas disponibles basadas en los datos
const PLATFORMS = ["PlayStation", "Xbox", "PC", "Nintendo Switch"];

// Lista de géneros disponibles basados en los datos
const GENRES = [
  "Acción/Aventura",
  "RPG",
  "RPG de Acción",
  "Survival Horror",
  "JRPG",
];

export default function Filters({ changeFilters }) {
  const handleGenreChange = (event) => {
    changeFilters((prevFilters) => ({
      ...prevFilters,
      genre: event.target.value,
    }));
  };

  const handlePlatformChange = (event) => {
    changeFilters((prevFilters) => ({
      ...prevFilters,
      platform: event.target.value,
    }));
  };

  return (
    <div className="filters">
      <h3>Filtros</h3>
      <form className="filters-form">
        <search className="search-filter">
          <input type="search" placeholder="Buscar Juegos..." id="search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search search-icon"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </search>
        <select
          className="select-filter"
          id="genre"
          onChange={handleGenreChange}
        >
          <option value="all">Todos los géneros</option>
          {GENRES.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <select
          className="select-filter"
          id="platform"
          onChange={handlePlatformChange}
        >
          <option value="all">Todas las plataformas</option>
          {PLATFORMS.map((platform) => (
            <option key={platform} value={platform}>
              {platform}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
