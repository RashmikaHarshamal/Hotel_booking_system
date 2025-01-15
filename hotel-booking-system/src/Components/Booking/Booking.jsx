import React from 'react';
import styles from './Booking.module.css';

export default function Booking() {
  return (
    <div className={`${styles.about_wrapper} section`}>
      <div className={styles.bookingContainer}>
        <h1 className={styles.bookingHeading}>BOOKING FORM</h1>
        <form className={styles.bookingForm}>
          <div className={styles.formLeft}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <div className={styles.inlineInputs}>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Birthday</label>
              <div className={styles.inlineInputs}>
                <select>
                  <option>Month</option>
                </select>
                <select>
                  <option>Day</option>
                </select>
                <select>
                  <option>Year</option>
                </select>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>ID</label>
              <input type="text" placeholder="NIC" />
            </div>
            <div className={styles.formGroup}>
              <label>Gender</label>
              <select>
                <option>Select</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Phone number</label>
              <input type="text" placeholder="977981******" />
            </div>
            <div className={styles.formGroup}>
              <label>Your e-mail address</label>
              <input type="email" placeholder="...@gmail.com" />
            </div>
            <div className={styles.formGroup}>
              <label> Address </label>
              <input type="text" />
            </div>
            <div className={styles.formGroup}>
              <label>Apt./Suite</label>
              <div className={styles.inlineInputs}>
                <input type="text" placeholder="City" />
                <input type="text" placeholder="State" />
                <input type="text" placeholder="Zip code" />
              </div>
            </div>
          </div>
          <div className={styles.formRight}>
            <div className={styles.formGroup}>
              <label>Your choices</label>
              <div className={styles.inlineInputs}>
                <select>
                  <option>Choose Guest num.</option>
                </select>
                <select>
                  <option>Room type</option>
                </select>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Floor</label>
              <div className={styles.inlineInputs}>
                <select>
                  <option>Floor</option>
                </select>
                <input type="text" placeholder="#" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Entry [date]</label>
              <input type="date" />
            </div>
            <div className={styles.formGroup}>
              <label>Departure [date]</label>
              <input type="date" />
            </div>
            <div className={styles.formGroup}>
              <button id="food-menu-btn" className={styles.foodMenuBtn}>Food and menu</button>
            </div>
            <div className={`${styles.formGroup} ${styles.checkboxes}`}>
              <label>
                <input type="checkbox" /> Check in?
              </label>
              <label>
                <input type="checkbox" /> Send SMS?
              </label>
              <label>
                <input type="checkbox" /> Food/Supply status?
              </label>
            </div>
            <button id="calculate-btn" className={styles.calculateBtn}>Calculate bill</button>
          </div>
        </form>
      </div>
    </div>
  );
}
