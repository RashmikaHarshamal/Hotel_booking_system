import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header2.module.css";

const Header2 = ({ cart }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Food Cart</div>
      <ul>
        <li>
          <Link to="/home2">Home</Link>
        </li>
        <li>
          <Link to="/cart">
            <span className={styles.cartCount}>{cart.length}</span> View Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header2;
