import React from 'react';
import styles from './Log.module.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

  const Navigate = useNavigate();

  return (
    <div className={styles.backgroundpart1}>
      <img src="/image3.jpg" alt="Background" className={styles.image} />
      <div className={styles.wrapper}>
        <form action="">
          <h1>
            Log<span>IN</span>
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
                      <Link to="/forgetpassword" aria-label="Forgot password?">
                        Forgot password?
                      </Link>
            </div>

            <button onClick={()=>Navigate('/header')} type="submit" className={styles.btn}>
            Login
          </button>

          <div className={styles.registerLink}>
            <p>
              Don't have an account? <Link to="/CreateAccount">Create Account</Link>
            </p>
          </div>

          <div className={styles.adminDoctor}>
            <p>
              Admin Login? <Link to="/adlogin">Click here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
