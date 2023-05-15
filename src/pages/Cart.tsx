import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import items from "../data/items.json";
import { shopContext } from "../context/shopContext";

const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(shopContext);

  return (
    <div className="cart">
      <h1 className="title">Cart</h1>

      <div className="cart-container">
        {items.map(
          (item) =>
            cartItems[item.id] > 0 && (
              <CartItem
                key={item.id}
                id={item.id}
                productName={item.productName}
                productURL={item.productURL}
                price={item.price}
              />
            )
        )}
      </div>
      <div className="cart-actions">
        <h2 className="total-price">Total Amount: £ {getTotalAmount()}</h2>
        <button className="checkout-btn" type="button">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
