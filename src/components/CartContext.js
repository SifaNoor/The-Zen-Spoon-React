import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (name, price) =>
    setCart(prev => {
      const existing = prev.find(i => i.name === name);
      if (existing) {
        return prev.map(i =>
          i.name === name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { name, price, quantity: 1 }];
    });

  const removeFromCart = name =>
    setCart(prev => prev.filter(i => i.name !== name));

  const updateQuantity = (name, delta) =>
    setCart(prev =>
      prev
        .map(i =>
          i.name === name ? { ...i, quantity: i.quantity + delta } : i
        )
        .filter(i => i.quantity > 0)
    );

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}