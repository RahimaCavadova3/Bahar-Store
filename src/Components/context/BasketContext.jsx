import React, { createContext, useState, useEffect } from 'react'

export const BASKET = createContext([])

function BasketContext({ children }) {
  const [sebet, setSebet] = useState(() => {
    const savedBasket = localStorage.getItem('sebet');
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem('sebet', JSON.stringify(sebet));
  }, [sebet]);

  // Məhsulu səbətə əlavə etmək (varsa sayını artırır)
  function addBasket(id, image, title, discountPercentage, price, finalPrice, category) {
    setSebet(prev => {
      const existingIndex = prev.findIndex(item => item.id === id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: (updated[existingIndex].quantity || 1) + 1
        };
        return updated;
      } else {
        return [...prev, { 
          id, 
          image, 
          title, 
          discountPercentage, 
          price,          // Orijinal qiymət
          finalPrice,     // Endirimli son qiymət
          category, 
          quantity: 1 
        }];
      }
    });
  }

  // Məhsulun sayını artırmaq (+)
  function increaseQuantity(id) {
    setSebet(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    ));
  }

  // Məhsulun sayını azaltmaq (-)
  function decreaseQuantity(id) {
    setSebet(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = (item.quantity || 1) - 1;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  }

  // Məhsulu səbətdən tamamilə silmək
  function removeFromBasket(id) {
    setSebet(prev => prev.filter(item => item.id !== id));
  }

  return (
    <BASKET.Provider value={{ addBasket, sebet, increaseQuantity, decreaseQuantity, removeFromBasket }}>
      {children}
    </BASKET.Provider>
  )
}

export default BasketContext