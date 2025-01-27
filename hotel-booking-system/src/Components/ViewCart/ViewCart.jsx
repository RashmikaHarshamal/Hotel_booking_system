import React, { useEffect, useState } from "react";
import styles from "./ViewCart.module.css";
import Header2 from "../Header2/Header2";

const ViewCart = ({ cart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]);

  return (
    <>
      <Header2 cart={cart} /> {/* Add Header2 here */}
      <h1 className={styles.cartHeading}>Cart Products</h1>
      <div className={styles.cartContainer}>
        {cart.map((product) => (
          <div className={styles.cartProduct} key={product.id}>
            <div className={styles.img}>
              <img src={product.pic} alt={product.name} />
            </div>
            <div className={styles.cartProductDetails}>
              <h3>{product.name}</h3>
              <p>Price Rs: {product.amt}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className={styles.cartAmt}>Total Amount Rs: {total}</h2>
    </>
  );
};

export default ViewCart;
