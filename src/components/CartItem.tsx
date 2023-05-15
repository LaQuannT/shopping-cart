import { useContext } from "react";
import { shopContext } from "../context/shopContext";

interface Props {
  id: number;
  productName: string;
  price: number;
  productURL: string;
}

const CartItem = ({ id, productName, price, productURL }: Props) => {
  const { addToCart, removeFromCart, cartItems } = useContext(shopContext);
  return (
    <div className="item-card">
      <div className="item-img">
        <img className="cart-item-img" src={productURL} alt={productName} />
      </div>
      <div className="item-details">
        <div className="item-name-price">
          <h3 className="item-name">{productName}</h3>
          <p className="item-price">£{price}</p>
        </div>
        <div className="item-actions">
          {cartItems[id] > 1 ? (
            <>
              <button
                type="button"
                className="add-btn"
                onClick={() => {
                  addToCart(id);
                }}
              >
                +
              </button>
              <p className="item-amount">{cartItems[id]}</p>
              <button
                type="button"
                className="subtract-btn"
                onClick={() => {
                  removeFromCart(id);
                }}
              >
                -
              </button>
            </>
          ) : (
            <button
              className="btn-remove"
              type="button"
              onClick={() => {
                removeFromCart(id);
              }}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
