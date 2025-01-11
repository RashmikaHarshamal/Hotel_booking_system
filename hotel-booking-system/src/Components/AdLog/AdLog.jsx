import React from 'react';
import styles from './AdLog.module.css';

export default function AdLogin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form handling logic here
  };

  return (
    <div className={styles.backgroundpart1}>
      <img src="/image3.jpg" alt="Background" className={styles.image} />
      <main className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <header>
            <h1>
              ADMIN Log<span>IN</span>
            </h1>
          </header>
          <div className={styles.inputBox}>
            <label htmlFor="username"></label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              required
              aria-label="Username"
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
              aria-label="Password"
            />
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
      </main>
    </div>
  );
}
