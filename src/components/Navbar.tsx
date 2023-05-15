import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="app-name">
        <Link to={"/"}>App</Link>
      </h1>

      <div className="nav-links">
        <p className="shop-link">
          <Link to={"/shop"}>Shop</Link>
          <button className="btn-cart">cart (0)</button>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
