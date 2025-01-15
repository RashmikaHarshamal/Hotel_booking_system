import React from 'react';
import styles from './CreateAcc.module.css';

export default function CreateAccount() {
  return (
    <div className={styles.backgroundpart1}>
      <img src="/image3.jpg" alt="Background" className={styles.image} />
      <div className={styles.wrapper}>
        <form action="">
          <h1>
            CREATE <span>ACCOUNT</span>
          </h1>

          <div className={styles.inline}>
            <div className={styles.inputBox}>
              <input type="text" placeholder="Full Name" required />
            </div>

            <div className={styles.inputBox}>
              <input type="text" placeholder="Last Name" required />
            </div>
          </div>

          <div className={styles.inputBox}>
            <input type="date" placeholder="Birth Day (mm/dd/yyyy)" required />
          </div>

          <div className={styles.inputBox}>
            <input type="Number" placeholder="ID No" required />
          </div>

          <div className={styles.inputBox}>
            <select placeholder="Gender" required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className={styles.inputBox}>
            <input type="tel" placeholder="Phone Number" required />
          </div>

          <div className={styles.inputBox}>
            <input type="email" placeholder="Email" required />
          </div>

          <div className={styles.inputBox}>
            <input type="text" placeholder="Address" required />
          </div>

          <button type="submit" className={styles.btn}>
            Create Account
          </button>

          <div className={styles.Already}>
            <p>
              Already have an account?{' '}
              <a href="/login" className={styles.loginLink}>
                login here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
