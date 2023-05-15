import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="app-name">
        <Link className="link" to={"/"}>
          App
        </Link>
      </h1>

      <div className="nav-links">
        <Link className="link" to={"/shop"}>
          Shop
        </Link>
        <button className="btn-cart">cart (0)</button>
      </div>
    </nav>
  );
};

export default Navbar;
