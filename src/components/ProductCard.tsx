import React, { useContext } from "react";
import { shopContext } from "../context/shopContext";

interface Props {
  id: number;
  productName: string;
  price: number;
  productURL: string;
}

const ProductCard = ({ id, productName, price, productURL }: Props) => {
  const { addToCart, cartItems } = useContext(shopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <div className="product-img">
        <img src={productURL} alt={productName} />
      </div>
      <div className="product-description">
        <p>{productName}</p>
        <p>£{price}</p>
      </div>
      <div className="product-actions">
        <button
          className="btn-add-cart"
          onClick={() => {
            addToCart(id);
          }}
        >
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
