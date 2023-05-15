import React from "react";

interface Props {
  id: number;
  productName: string;
  price: number;
  productURL: string;
}

const ProductCard = ({ id, productName, price, productURL }: Props) => {
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
        <button className="btn-add-cart">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
