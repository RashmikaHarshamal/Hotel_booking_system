import React, { useState } from "react";
import styles from "./Home2.module.css";
import Product from "../Product/Product";
import data from "../../assets/product.json";
import Header2 from "../Header2/Header2";

const Home2 = ({ cart, setCart }) => {
  const [products] = useState(data);

  return (
    <>
      <Header2 cart={cart} /> {/* Add Header2 here */}
      <div className={styles.productContainer}>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </>
  );
};

export default Home2;
