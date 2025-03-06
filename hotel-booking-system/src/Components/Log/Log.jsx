import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Log.module.css';

export default function Login() {
  const [id_number, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_number, password })
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        navigate('/headerloged');
      } else {
        const error = await response.text();
        alert(error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div className={styles.backgroundpart1}>
      <img src="/image3.jpg" alt="Background" className={styles.image} />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <h1>
            Log<span>IN</span>
          </h1>
          <div className={styles.inputBox}>
            <input 
              type="text" 
              placeholder="ID Number" 
              value={id_number} 
              onChange={(e) => setIdNumber(e.target.value)} 
              required 
            />
          </div>

          <div className={styles.inputBox}>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
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

          <button type="submit" className={styles.btn}>
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
