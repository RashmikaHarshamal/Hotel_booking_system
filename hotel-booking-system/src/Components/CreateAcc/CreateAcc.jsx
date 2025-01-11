import React from 'react';
import styles from './CreateAcc.module.css';

export default function Login() {
  return (
    <div className={styles.backgroundpart1}>
      <img src="/image3.jpg" alt="Background" className={styles.image} />
      <div className={styles.wrapper}>
        <form action="">
          <h1>
            CREATE <span>ACCOUNT</span>
          </h1>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className={styles.inputBox}>
            <input type="password" placeholder="Last Name" required />
          </div>

          <div className={styles.inputBox}>
            <input type="password" placeholder="Birth Day" required />
          </div>

          <div className={styles.inputBox}>
            <input type="text" placeholder="Gender" required />
          </div>

          <div className={styles.inputBox}>
            <input type="Number" placeholder="Phone Number" required />
          </div>

          <div className={styles.inputBox}>
            <input type="text" placeholder="Email" required />
          </div>

          <div className={styles.inputBox}>
            <input type="text" placeholder="Adress" required />
          </div>

          <div className={styles.rememberForgot}>
                      <label htmlFor="remember">
                        <input id="remember" type="checkbox" />
                        Remember me
                      </label>
                      <a href="#" aria-label="Forgot password?">
                        Forgot password?
                      </a>
            </div>

          <button type="submit" className={styles.btn}>
            Login
          </button>

          <div className={styles.registerLink}>
            <p>
              Don't have an account? <a href="#">Create Account</a>
            </p>
          </div>

          <div className={styles.adminDoctor}>
            <p>
              Admin Login? <a href="#">Click here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
