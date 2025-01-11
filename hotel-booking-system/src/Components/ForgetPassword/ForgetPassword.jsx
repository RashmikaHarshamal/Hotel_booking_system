import React from 'react';
import styles from './ForgetPassword.module.css';

export default function Login() {
  return (
    <div className={styles.backgroundpart1}>
      <img src="/image3.jpg" alt="Background" className={styles.image} />
      <div className={styles.wrapper}>
        <form action="">
          <h1>
            FORGET  <span>PASSWORD</span>
          </h1>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Email" required />
          </div>

          <div className={styles.inputBox}>
            <input type="password" placeholder="Password" required />
          </div>
          
          <div className={styles.inputBox}>
            <input type="Birth Day" placeholder="Birth Day" required />
          </div>

          <div className={styles.rememberForgot}>
                      <label htmlFor="remember">
                              
                      </label>
                      <a href="#" aria-label="Forgot password?">
                          <t>  </t>
                      </a>
            </div>

          <button type="submit" className={styles.btn}>
            Reset Password
          </button>

        </form>
      </div>
    </div>
  );
}
