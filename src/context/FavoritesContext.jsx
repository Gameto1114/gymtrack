import { useState } from "react";
import { FavoritesContext } from "./favoritesContextObject";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(routine) {
    setFavorites((prev) => {
      const exists = prev.some((r) => r.id === routine.id);
      if (exists) {
        return prev.filter((r) => r.id !== routine.id);
      }
      return [...prev, routine];
    });
  }

  function isFavorite(id) {
    return favorites.some((r) => r.id === id);
  }

  const value = { favorites, toggleFavorite, isFavorite };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
