import React, { createContext, useState } from "react";
import items from "../data/items.json";

interface Props {
  children: React.ReactNode;
}

interface ShopContext {
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  cartItems: Record<number, number>;
}

export const shopContext = createContext({} as ShopContext);

const GetDefaultCart = () => {
  const cart: Record<number, number> = {};

  for (let i = 1; i < items.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }: Props) => {
  const initState = GetDefaultCart();
  const [cartItems, setCartItems] = useState(initState);

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { addToCart, removeFromCart, cartItems };
  return (
    <shopContext.Provider value={contextValue}>{children}</shopContext.Provider>
  );
};

export default ShopContextProvider;
