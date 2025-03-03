import React, { useState } from "react";
import styles from "./AdminDashboard.module.css";

import { Link, useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "John Doe",
      age: 30,
      doctorName: "Dr. Samuel Carter",
      doctorSpeciality: "Dermatologist",
      date: "Friday",
      time: "5:00 PM",
      status: "Pending",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      age: 25,
      doctorName: "Dr. Alexander Scott",
      doctorSpeciality: "Pediatrician",
      date: "Friday",
      time: "2:00 PM",
      status: "Completed",
    },
    {
      id: 3,
      patientName: "Alice Johnson",
      age: 28,
      doctorName: "Dr. Laura White",
      doctorSpeciality: "Cardiologist",
      date: "Monday",
      time: "9:00 AM",
      status: "Pending",
    },
    {
      id: 4,
      patientName: "Bob Brown",
      age: 35,
      doctorName: "Dr. Emily Davis",
      doctorSpeciality: "Neurologist",
      date: "Wednesday",
      time: "10:30 AM",
      status: "Completed",
    },
    {
      id: 5,
      patientName: "Charlie Green",
      age: 42,
      doctorName: "Dr. Robert Green",
      doctorSpeciality: "Orthopedist",
      date: "Tuesday",
      time: "3:00 PM",
      status: "Canceled",
    },
    {
      id: 6,
      patientName: "David Lee",
      age: 55,
      doctorName: "Dr. Steven Harris",
      doctorSpeciality: "Gastroenterologist",
      date: "Thursday",
      time: "1:00 PM",
      status: "Pending",
    },
    // Add more unique patient records with different `id`
  ]);

  const [search, setSearch] = useState("");

  const updateStatus = (id, newStatus) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status: newStatus } : appointment
      )
    );
  };

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.patientName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.adminDashboardContainer}>
      <h1>Appointments Dashboard</h1>

      {/* Dashboard Summary */}
      <div className={styles.dashboardCards}>
        <div className={styles.card}>
          <h2>{appointments.length}</h2>
          <p>Total Appointments</p>
        </div>
        <div className={styles.card}>
          <h2>{appointments.filter((a) => a.status === "Completed").length}</h2>
          <p>Completed</p>
        </div>
        <div className={styles.card}>
          <h2>{appointments.filter((a) => a.status === "Pending").length}</h2>
          <p>Pending</p>
        </div>
        <div className={styles.card}>
          <h2>{appointments.filter((a) => a.status === "Canceled").length}</h2>
          <p>Canceled</p>
        </div>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by patient name..."
        className={styles.searchBar}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Appointments Table */}
      <table className={styles.adminAppointmentsTable}>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.patientName}</td>
              <td>{appointment.age}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.doctorSpeciality}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>
                <span
                  className={`${styles.statusBadge} ${
                    styles[appointment.status.toLowerCase()]
                  }`}
                >
                  {appointment.status}
                </span>
              </td>
              <td>
  {appointment.status === "Pending" ? (
    <div className={styles.adminActions}>
      <button
        className={styles.adminCompleteBtn}
        onClick={() => updateStatus(appointment.id, "Completed")}
      >
        Confirm✅
      </button>
      <button
        className={styles.adminCancelBtn}
        onClick={() => updateStatus(appointment.id, "Canceled")}
      >
        Cancel❌
      </button>
      <button
        className={styles.adminEditBtn}
        onClick={() => updateStatus(appointment.id, "edit")}
      >
        Edit✏️
      </button>
    </div>
  ) : (
    <span>{appointment.status}</span>
  )}
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
