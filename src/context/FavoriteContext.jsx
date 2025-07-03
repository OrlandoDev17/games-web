import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (gameId) => {
    setFavorites((prev) => {
      return prev.includes(gameId)
        ? prev.filter((id) => id !== gameId)
        : [...prev, gameId];
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () => useContext(FavoriteContext);
