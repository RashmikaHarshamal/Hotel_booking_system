import React from "react";
import "./CartHeader.css";

const CartHeader = ({ cart }) => {
  return (
    <div className="navbar">
      <div className="logo">Food Cart</div>
      <ul className="nav-links">
        <li className="nav-item">Home</li>
        <li className="nav-item cart-link">
          View Cart 
          <span className="cart-count">{cart.length}</span>
        </li>
      </ul>
    </div>
  );
};

export default CartHeader;
