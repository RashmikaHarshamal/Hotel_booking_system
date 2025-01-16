import React from 'react';
import styles from './ForgetPassword.module.css';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
  const navigate = useNavigate(); // Correctly use the `useNavigate` hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Reset password logic here (e.g., API call to reset password)
    console.log('Password reset logic executed');

    // Redirect to the login page
    navigate('/log');
  };

  return (
    <div className={styles.backgroundpart1}>
      <img src="/image3.jpg" alt="Background" className={styles.image} />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <h1>
            FORGET <span>PASSWORD</span>
          </h1>
          <div className={styles.inputBox}>
            <input type="email" placeholder="Email" required />
          </div>

          <div className={styles.inputBox}>
            <input type="password" placeholder="New Password" required />
          </div>

          <div className={styles.inputBox}>
            <input type="date" placeholder="Birth Day" required />
          </div>

          <div className={styles.rememberForgot}>
            <label htmlFor="remember"></label>
            <a href="#" aria-label="Forgot password?">
              <t></t>
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
