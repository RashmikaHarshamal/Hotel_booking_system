import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AdminDashboard.module.css';

export default function AdminDashboard() {
  const [rooms, setRooms] = useState([]);
  const [search, setSearch] = useState('');
  const [editingRoom, setEditingRoom] = useState(null); // Track the room being edited
  const [updatedRoom, setUpdatedRoom] = useState({
    name: '',
    picture: '',
    amount: 0,
    availability: 'Available',
    discount: 0,
    duration: '',
    foods: '',
    gym_and_pool: '',
  });

  // Fetch all rooms from the backend
  useEffect(() => {
    axios.get('http://localhost:8081/rooms')
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => console.error('Error fetching rooms:', error));
  }, []);

  // Filter rooms based on search input
  const filteredRooms = rooms.filter((room) =>
    room.name.toLowerCase().includes(search.toLowerCase())
  );

  // Count total, booked, and available rooms
  const totalRoomsCount = rooms.length;
  const bookedRoomsCount = rooms.filter((room) => room.availability === 'Booked').length;
  const availableRoomsCount = rooms.filter((room) => room.availability === 'Available').length;

  // Handle room deletion
  const handleDeleteRoom = (id) => {
    axios.delete(`http://localhost:8081/rooms/${id}`)
      .then(() => {
        setRooms((prevRooms) => prevRooms.filter((room) => room.id !== id));
      })
      .catch((error) => console.error('Error deleting room:', error));
  };

  // Handle room status toggle (Book/Unbook)
  const handleToggleBooking = (id, currentAvailability) => {
    const newAvailability = currentAvailability === 'Available' ? 'Booked' : 'Available';
    axios.put(`http://localhost:8081/rooms/${id}`, { availability: newAvailability })
      .then(() => {
        setRooms((prevRooms) =>
          prevRooms.map((room) =>
            room.id === id ? { ...room, availability: newAvailability } : room
          )
        );
      })
      .catch((error) => console.error('Error updating room status:', error));
  };

  // Handle opening the update form
  const handleOpenUpdateForm = (room) => {
    setEditingRoom(room.id);
    setUpdatedRoom(room);
  };

  // Handle input changes in the update form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value,
    }));
  };

  // Handle form submission to update room details
  const handleUpdateRoom = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8081/rooms/${editingRoom}`, updatedRoom)
      .then(() => {
        setRooms((prevRooms) =>
          prevRooms.map((room) =>
            room.id === editingRoom ? updatedRoom : room
          )
        );
        setEditingRoom(null); // Close the form
      })
      .catch((error) => console.error('Error updating room:', error));
  };

  return (
    <div className={styles.adminDashboardContainer}>
      <h1>Rooms Dashboard</h1>

      {/* Room Count Summary */}
      <div className={styles.dashboardSummary}>
        <div className={styles.summaryCard}>
          <h2>{totalRoomsCount}</h2>
          <p>Total Rooms</p>
        </div>
        <div className={styles.summaryCard}>
          <h2>{bookedRoomsCount}</h2>
          <p>Booked Rooms</p>
        </div>
        <div className={styles.summaryCard}>
          <h2>{availableRoomsCount}</h2>
          <p>Available Rooms</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search by Room Name..."
          className={styles.searchBar}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Rooms Table */}
      <table className={styles.adminRoomsTable}>
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Picture</th>
            <th>Amount</th>
            <th>Availability</th>
            <th>Discount</th>
            <th>Duration</th>
            <th>Foods</th>
            <th>Gym and Pool</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRooms.map((room) => (
            <tr key={room.id}>
              <td>{room.name}</td>
              <td><img src={room.picture} alt={room.name} width="50" /></td>
              <td>${room.amount}</td>
              <td>{room.availability}</td>
              <td>{room.discount}%</td>
              <td>{room.duration}</td>
              <td>{room.foods}</td>
              <td>{room.gym_and_pool}</td>
              <td>
                <button
                  className={room.availability === 'Available' ? styles.bookButton : styles.unbookButton}
                  onClick={() => handleToggleBooking(room.id, room.availability)}
                >
                  {room.availability === 'Available' ? 'Book' : 'Unbook'}
                </button>
                <button
                  className={styles.updateButton}
                  onClick={() => handleOpenUpdateForm(room)}
                >
                  Update
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDeleteRoom(room.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Room Form */}
      {editingRoom && (
        <div className={styles.updateFormOverlay}>
          <div className={styles.updateForm}>
            <h2>Update Room Details</h2>
            <form onSubmit={handleUpdateRoom}>
              <div className={styles.formGroup}>
                <label>Room Name</label>
                <input
                  type="text"
                  name="name"
                  value={updatedRoom.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Picture URL</label>
                <input
                  type="text"
                  name="picture"
                  value={updatedRoom.picture}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={updatedRoom.amount}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Availability</label>
                <select
                  name="availability"
                  value={updatedRoom.availability}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Available">Available</option>
                  <option value="Booked">Booked</option>
                  <option value="Canceled">Canceled</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Discount (%)</label>
                <input
                  type="number"
                  name="discount"
                  value={updatedRoom.discount}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={updatedRoom.duration}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Foods</label>
                <input
                  type="text"
                  name="foods"
                  value={updatedRoom.foods}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Gym and Pool</label>
                <input
                  type="text"
                  name="gym_and_pool"
                  value={updatedRoom.gym_and_pool}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* Button Container */}
              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitButton}>
                  Save Changes
                </button>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => setEditingRoom(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}