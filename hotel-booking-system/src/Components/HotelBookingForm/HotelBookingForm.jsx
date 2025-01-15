import React, { useState } from "react";
import styles from "./HotelBookingForm.module.css";

const HotelBookingForm = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
    roomNumber: "",
    room: "",
    entryDate: "",
    departureDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Details Updated:", userDetails);
    alert("User details updated successfully!");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardContainer}>
        <h1 id="formHeader">🌟 Udate Booking 🌟</h1>
        {/* <p className={styles.introText}>
          Complete the form below to update your hotel booking. Enjoy a seamless experience with us!
        </p> */}
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* First Name */}
          <div className={styles.inputGroup}>
            <label htmlFor="userFirstName">First Name</label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="userFirstName"
                name="firstName"
                value={userDetails.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                required
                className={styles.textField}
              />
            </div>
          </div>

          {/* Last Name */}
          <div className={styles.inputGroup}>
            <label htmlFor="userLastName">Last Name</label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="userLastName"
                name="lastName"
                value={userDetails.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                required
                className={styles.textField}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="NIC">NIC</label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="NIC"
                name="NIC"
                value={userDetails.NIC}
                onChange={handleChange}
                placeholder="Enter NIC"
                required
                className={styles.textField}
              />
            </div>
          </div>

          {/* Other Inputs */}
          <div className={styles.inputGroup}>
            <label htmlFor="userBirthday">Birthday</label>
            <div className={styles.inputWrapper}>
              <input
                type="date"
                id="userBirthday"
                name="birthday"
                value={userDetails.birthday}
                onChange={handleChange}
                required
                className={styles.textField}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="userGender">Gender</label>
            <div className={styles.inputWrapper}>
              <select
                id="userGender"
                name="gender"
                value={userDetails.gender}
                onChange={handleChange}
                required
                className={styles.textField}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="address">Adress</label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="Adress"
                name="Adress"
                value={userDetails.Adress}
                onChange={handleChange}
                placeholder="Enter Adress"
                required
                className={styles.textField}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="Email">Email</label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="Email"
                name="Email"
                value={userDetails.Email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
                className={styles.textField}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="userRoomType">Room Type</label>
            <div className={styles.inputWrapper}>
              <select
                id="userRoomType"
                name="room"
                value={userDetails.room}
                onChange={handleChange}
                required
                className={styles.textField}
              >
                <option value="">Select Room</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Suite">Suite</option>
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="roomNumber">Room Number</label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="roomNumber"
                name="roomNumber"
                value={userDetails.roomNumber}
                onChange={handleChange}
                placeholder="Enter room number"
                required
                className={styles.textField}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="entryDate">Entry Date</label>
            <div className={styles.inputWrapper}>
              <input
                type="date"
                id="entryDate"
                name="entryDate"
                value={userDetails.entryDate}
                onChange={handleChange}
                required
                className={styles.textField}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="departureDate">Departure Date</label>
            <div className={styles.inputWrapper}>
              <input
                type="date"
                id="departureDate"
                name="departureDate"
                value={userDetails.departureDate}
                onChange={handleChange}
                required
                className={styles.textField}
              />
            </div>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Update Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotelBookingForm;