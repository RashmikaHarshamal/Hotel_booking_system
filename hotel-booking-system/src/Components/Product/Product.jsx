import React from "react";
import styles from "./Product.module.css";

const Product = ({ product, cart, setCart }) => {
  const name =
    product.name.length > 21 ? product.name.substring(0, 20) + "..." : product.name;

  const addCart = () => {
    setCart([...cart, product]);
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img src={product.pic} alt={product.name} />
      </div>
      <div className={styles.details}>
        <h3>{name}</h3>
        <p>Price Rs: {product.amt}</p>
        {cart.includes(product) ? (
          <button className={styles.btnRemove} onClick={removeCart}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={addCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
