import React, { useState } from 'react';
import styles from './AdLog.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdLogin() {
  const navigate = useNavigate();
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/adminlogin', {
        id_number: idNumber,
        password: password,
      });

      if (response.data.message === 'Login successful') {
        // Redirect to admin dashboard after successful login
        navigate('/admindashboard');
      }
    } catch (error) {
      setError('Invalid ID Number or Password');
    }
  };

  return (
    <div className={styles.backgroundpart1}>
      <img src="/image3.jpg" alt="Background" className={styles.image} />
      <div className={styles.wrapper}>
        <form onSubmit={handleLogin}>
          <h1>
            AD<span>MIN </span> Log<span>IN</span>
          </h1>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div className={styles.inputBox}>
            <input 
              type="text" 
              placeholder="ID Number" 
              required 
              value={idNumber} 
              onChange={(e) => setIdNumber(e.target.value)}
            />
          </div>

          <div className={styles.inputBox}>
            <input 
              type="password" 
              placeholder="Password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
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
