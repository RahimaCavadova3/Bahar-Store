import React, { createContext, useState, useEffect } from 'react'

export const FAVORITES = createContext([])

function FavoritesContext({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Favorilərə əlavə etmək / silmək (Toggle)
  function toggleFavorite(product) {
    setFavorites(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  }

  // Siyahıdan silmək üçün
  function removeFromFavorites(id) {
    setFavorites(prev => prev.filter(item => item.id !== id));
  }

  return (
    <FAVORITES.Provider value={{ favorites, toggleFavorite, removeFromFavorites }}>
      {children}
    </FAVORITES.Provider>
  )
}

export default FavoritesContext