import React, { useState } from "react";
import "./CartHome.css";

const CartHome = () => {
  // State for tracking cart and products
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: "Framers Pick", amt: 299, pic: "image1.jpg" },
    { id: 2, name: "Framers Pick2", amt: 2991, pic: "image2.jpg" },
    { id: 3, name: "Framers Pick3", amt: 2992, pic: "image3.jpg" },
    { id: 4, name: "Framers Pick4", amt: 2993, pic: "image4.jpg" },
    { id: 5, name: "Framers Pick5", amt: 2994, pic: "image5.jpg" },
  ]);

  // Add product to cart
  const addToCart = (product) => {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
    }
  };

  // Remove product from cart
  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img className="product-image" src={product.pic} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price Rs: {product.amt}</p>
          {cart.includes(product) ? (
            <button
              className="remove-button"
              onClick={() => removeFromCart(product)}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="add-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CartHome;
