import React from 'react';
import styles from './Log.module.css';

export default function Login() {
  return (
    <div className={styles.backgroundpart1}>
      <img src="/image3.jpg" alt="Background" className={styles.image} />
      <div className={styles.wrapper}>
        <form action="">
          <h1>Login</h1>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Username" required />
          </div>

          <div className={styles.inputBox}>
            <input type="password" placeholder="Password" required />
          </div>

          <div className={styles.rememberForgot}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className={styles.btn}>Login</button>

          <div className={styles.registerLink}>
            <p>
              Don't have an account? <a href="#">Create Account</a>
            </p>
          </div>

          <div className={styles.adminDoctor}>
            <p>
              Admin Login? <a href="#">Click here</a>
            </p>
            <p>
              Doctor Login? <a href="#">Click here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
