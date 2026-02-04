import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AdminDashboard.module.css';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [rooms, setRooms] = useState([]);
  const [search, setSearch] = useState('');
  const [editingRoom, setEditingRoom] = useState(null);
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
  const [showAddForm, setShowAddForm] = useState(false);
  const [newRoom, setNewRoom] = useState({
    name: '',
    picture: '',
    amount: 0,
    availability: 'Available',
    discount: 0,
    duration: '',
    foods: '',
    gym_and_pool: '',
  });
  const [showBookedRooms, setShowBookedRooms] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [showPendingRequests, setShowPendingRequests] = useState(false);

  // Fetch all rooms from the backend
  useEffect(() => {
    axios.get('http://localhost:8081/rooms')
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => console.error('Error fetching rooms:', error));
  }, []);

  // Fetch pending requests
  const fetchPendingRequests = () => {
    axios.get('http://localhost:8081/pending-requests') // Replace with your API endpoint
      .then((response) => {
        setPendingRequests(response.data);
        setShowPendingRequests(true);
      })
      .catch((error) => console.error('Error fetching pending requests:', error));
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Example: Remove token from localStorage
    window.location.href = '/login'; // Redirect to login page
  };

  // Filter rooms based on search and booked rooms toggle
  const filteredRooms = showBookedRooms
    ? rooms.filter((room) => room.availability === 'Booked')
    : rooms.filter((room) =>
        room.name.toLowerCase().includes(search.toLowerCase())
      );

  const totalRoomsCount = rooms.length;
  const bookedRoomsCount = rooms.filter((room) => room.availability === 'Booked').length;
  const availableRoomsCount = rooms.filter((room) => room.availability === 'Available').length;

  // Delete a room
  const handleDeleteRoom = (id) => {
    axios.delete(`http://localhost:8081/rooms/${id}`)
      .then(() => {
        setRooms((prevRooms) => prevRooms.filter((room) => room.id !== id));
      })
      .catch((error) => console.error('Error deleting room:', error));
  };

  // Toggle room booking status
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

  // Open update form and populate with room data
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

  // Update room details
  const handleUpdateRoom = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8081/rooms/${editingRoom}`, updatedRoom)
      .then(() => {
        setRooms((prevRooms) =>
          prevRooms.map((room) =>
            room.id === editingRoom ? updatedRoom : room
          )
        );
        setEditingRoom(null);
      })
      .catch((error) => console.error('Error updating room:', error));
  };

  // Handle input changes in the add form
  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value,
    }));
  };

  // Add a new room
  const handleAddRoom = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/rooms', newRoom)
      .then((response) => {
        setRooms((prevRooms) => [...prevRooms, response.data]);
        setShowAddForm(false);
        setNewRoom({
          name: '',
          picture: '',
          amount: 0,
          availability: 'Available',
          discount: 0,
          duration: '',
          foods: '',
          gym_and_pool: '',
        });
      })
      .catch((error) => console.error('Error adding room:', error));
  };

  // Toggle booked rooms filter
  const handleShowBookedRooms = () => {
    setShowBookedRooms(!showBookedRooms);
  };

  // Toggle request form
  const handleShowRequestForm = () => {
    setShowRequestForm(!showRequestForm);
  };

  const Navigate = useNavigate();
  return (
    <div className={styles.adminDashboardContainer}>
      <h1>AD<span>MIN</span>  DASH<span>BOARD</span></h1>

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

      {/* Button Container */}
      <div className={styles.buttonContainer}>
        <button
          className={styles.addButton}
          onClick={() => setShowAddForm(true)}
        >
          Add New Room
        </button>
        <button
          className={styles.bookedButton}
          onClick={handleShowBookedRooms}
        >
          {showBookedRooms ? 'Show All Rooms' : 'Booked'}
        </button>
        <button
          className={styles.requestButton}
          onClick={handleShowRequestForm}
        >
          Request
        </button>
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
            {filteredRooms.some((room) => room.availability === 'Booked') && (
              <>
                <th>Duration</th>
                <th>Foods</th>
                <th>Gym and Pool</th>
              </>
            )}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRooms.map((room) => (
            <tr key={room.id}>
              <td>{room.name}</td>
              <td>
                <img src={room.picture} alt={room.name} width="50" />
              </td>
              <td>${room.amount}</td>
              <td>{room.availability}</td>
              <td>{room.discount}%</td>
              {room.availability === 'Booked' && (
                <>
                  <td>{room.duration}</td>
                  <td>{room.foods}</td>
                  <td>{room.gym_and_pool}</td>
                </>
              )}
              {room.availability !== 'Booked' && (
                <>
                  <td></td>
                  <td></td>
                  <td></td>
                </>
              )}
              <td>
                <button
                  className={
                    room.availability === 'Available' ? styles.bookButton : styles.unbookButton
                  }
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

      {/* Add Room Form */}
      {showAddForm && (
        <div className={styles.updateFormOverlay}>
          <div className={styles.updateForm}>
            <h2>Add New Room</h2>
            <form onSubmit={handleAddRoom}>
              <div className={styles.formGroup}>
                <label>Room Name</label>
                <input
                  type="text"
                  name="name"
                  value={newRoom.name}
                  onChange={handleAddInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Picture URL</label>
                <input
                  type="text"
                  name="picture"
                  value={newRoom.picture}
                  onChange={handleAddInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={newRoom.amount}
                  onChange={handleAddInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Availability</label>
                <select
                  name="availability"
                  value={newRoom.availability}
                  onChange={handleAddInputChange}
                  required
                >
                  <option value="Available">Available</option>
                  <option value="Booked">Booked</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Discount (%)</label>
                <input
                  type="number"
                  name="discount"
                  value={newRoom.discount}
                  onChange={handleAddInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={newRoom.duration}
                  onChange={handleAddInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Foods</label>
                <input
                  type="text"
                  name="foods"
                  value={newRoom.foods}
                  onChange={handleAddInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Gym and Pool</label>
                <input
                  type="text"
                  name="gym_and_pool"
                  value={newRoom.gym_and_pool}
                  onChange={handleAddInputChange}
                  required
                />
              </div>
              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitButton}>
                  Add Room
                </button>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Request Form */}
      {showRequestForm && (
        <div className={styles.updateFormOverlay}>
          <div className={styles.updateForm}>
            <h2>Room Request</h2>
            <form>
              <div className={styles.formGroup}>
                <label>Request Details</label>
                <textarea
                  placeholder="Enter your request details..."
                  rows="5"
                  style={{ width: '100%' }}
                />
              </div>
              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitButton}>
                  Submit Request
                </button>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => setShowRequestForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Pending Requests Overlay */}
      {showPendingRequests && (
        <div className={styles.pendingRequestsOverlay}>
          <div className={styles.pendingRequests}>
            <h2>Pending Requests</h2>
            <table className={styles.pendingRequestsTable}>
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Room Name</th>
                  <th>User</th>
                  <th>Request Details</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingRequests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>{request.roomName}</td>
                    <td>{request.user}</td>
                    <td>{request.details}</td>
                    <td>
                      <button
                        className={styles.approveButton}
                        onClick={() => handleApproveRequest(request.id)}
                      >
                        Approve
                      </button>
                      <button
                        className={styles.rejectButton}
                        onClick={() => handleRejectRequest(request.id)}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className={styles.closeButton}
              onClick={() => setShowPendingRequests(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Bottom Buttons */}
      <div className={styles.bottomButtons}>
        <button
          className={styles.pendingButton}
          onClick={()=>Navigate('/cart')}
        >
          Pending
        </button>
        <button
          className={styles.logoutButton}
          onClick={()=>Navigate('/log')}
        >
          Logout
        </button>
      </div>
    </div>
  );
}