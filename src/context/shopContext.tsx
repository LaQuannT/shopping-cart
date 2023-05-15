import React, { createContext, useState } from "react";
import items from "../data/items.json";

interface Props {
  children: React.ReactNode;
}

interface ShopContext {
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalAmount: () => number;
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

  const getTotalAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemPrice = items.find(
          (storeItem) => storeItem.id === Number(item)
        )?.price;

        if (itemPrice) totalAmount += cartItems[item] * itemPrice;
      }
    }

    return totalAmount;
  };

  const contextValue = { addToCart, removeFromCart, cartItems, getTotalAmount };
  return (
    <shopContext.Provider value={contextValue}>{children}</shopContext.Provider>
  );
};

export default ShopContextProvider;
