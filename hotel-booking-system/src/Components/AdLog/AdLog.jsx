import React from 'react';
import styles from './AdLog.module.css';
import { Link, useNavigate } from 'react-router-dom';

export default function AdLogin() {

  const Navigate = useNavigate();

  return (
    <div className={styles.backgroundpart1}>
      <img src="/image3.jpg" alt="Background" className={styles.image} />
      <div className={styles.wrapper}>
        <form action="">
          <h1>
            AD<span>MIN </span> Log<span>IN</span>
          </h1>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Username" required />
          </div>

          <div className={styles.inputBox}>
            <input type="password" placeholder="Password" required />
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

          <button onClick={()=>Navigate('/admindashboard')}type="submit" className={styles.btn}>
            Login
          </button>

          <div className={styles.registerLink}>
            <p>
              Don't have an account? <Link to="/CreateAccount">Create Account</Link>
            </p>
          </div>

          <div className={styles.adminDoctor}>
            <p>
              User Login? <Link to="/log">Click here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
