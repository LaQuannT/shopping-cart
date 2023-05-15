import React from "react";
import items from "../data/items.json";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  return (
    <div className="shop">
      <h1 className="title">Shop</h1>

      <div className="products">
        {items.map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              productName={item.productName}
              price={item.price}
              productURL={item.productURL}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
