import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CreateAcc.module.css';

export default function CreateAccount() {
  const [full_name, setFullName] = useState('');
  const [last_name, setLastName] = useState('');
  const [birth_date, setBirthDate] = useState('');
  const [id_number, setIdNumber] = useState('');
  const [gender, setGender] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Send POST request to backend
    try {
      const response = await fetch('http://localhost:8081/create-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name,
          last_name,
          birth_date,
          id_number,
          gender,
          phone_number,
          password
        })
      });

      if (response.ok) {
        alert('Account created successfully!');
        navigate('/log'); // Redirect to login page
      } else {
        alert('Error creating account');
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
            CREATE <span>ACCOUNT</span>
          </h1>

          <div className={styles.inline}>
            <div className={styles.inputBox}>
              <input 
                type="text" 
                placeholder="Full Name" 
                value={full_name} 
                onChange={(e) => setFullName(e.target.value)} 
                required 
              />
            </div>

            <div className={styles.inputBox}>
              <input 
                type="text" 
                placeholder="Last Name" 
                value={last_name} 
                onChange={(e) => setLastName(e.target.value)} 
                required 
              />
            </div>
          </div>

          <div className={styles.inputBox}>
            <input 
              type="date" 
              placeholder="Birth Day (mm/dd/yyyy)" 
              value={birth_date} 
              onChange={(e) => setBirthDate(e.target.value)} 
              required 
            />
          </div>

          <div className={styles.inputBox}>
            <input 
              type="Number" 
              placeholder="ID No" 
              value={id_number} 
              onChange={(e) => setIdNumber(e.target.value)} 
              required 
            />
          </div>

          <div className={styles.inputBox}>
            <select 
              value={gender} 
              onChange={(e) => setGender(e.target.value)} 
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className={styles.inputBox}>
            <input 
              type="tel" 
              placeholder="Phone Number" 
              value={phone_number} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
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

          <div className={styles.inputBox}>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className={styles.btn}>
            Create Account
          </button>

          <div className={styles.Already}>
            <p>
              Already have an account?{' '}
              <Link to="/log" className={styles.loginLink}>
                login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
