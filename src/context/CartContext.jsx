import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};