// Pay.jsx
import React from "react";
import styles from "./PayRooms.module.css";

const PayRooms = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Please enter your card data:</h2>
        <div className={styles.cardIcons}>
          <img src="/assets/visa.png" alt="Visa" />
          <img src="/assets/mastercard.png" alt="Mastercard" />
          <img src="/assets/amex.png" alt="American Express" />
          <img src="/assets/maestro.png" alt="Maestro" />
          <img src="/assets/diners.png" alt="Diners Club" />
          <img src="/assets/discover.png" alt="Discover" />
        </div>
        <form className={styles.form}>
          {/* Card Number */}
          <input
            type="text"
            placeholder="Card number"
            className={`${styles.input} ${styles.fullWidth}`}
          />

          {/* Date and CVC */}
          <div className={styles.row}>
            <input type="text" placeholder="MM / YY" className={styles.input} />
            <input type="text" placeholder="CVC" className={styles.input} />
          </div>

          {/* Name on Card */}
          <input
            type="text"
            placeholder="Name on card"
            className={`${styles.input} ${styles.fullWidth}`}
          />

          {/* Pay Button */}
          <button type="submit" className={styles.button}>
            Pay now
          </button>
        </form>
        <div className={styles.footer}>
          <p className={styles.securedText}>Transaction secured by</p>
          <img src="/assets/computop.png" alt="Computop" className={styles.logo} />
          <div className={styles.links}>
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Data Privacy</a>
            <a href="/about">About Computop</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayRooms;
