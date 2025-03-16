const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
const port = 8081;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (images)
app.use('/images', express.static(path.join(__dirname, 'images')));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rush@2001780',
  database: 'hotel_booking_system',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

// --- Room Management API ---

// Get all rooms
app.get('/rooms', (req, res) => {
  const query = 'SELECT * FROM rooms';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a new room
app.post('/rooms', (req, res) => {
  const { name, picture, amount, availability, discount, duration, foods, gym_and_pool } = req.body;
  const query = `INSERT INTO rooms (name, picture, amount, availability, discount, duration, foods, gym_and_pool) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  db.query(query, [name, picture, amount, availability, discount, duration, foods, gym_and_pool], (err, result) => {
    if (err) throw err;
    res.status(201).json({ message: 'Room added successfully!', id: result.insertId });
  });
});

// Update room details or availability
app.put('/rooms/:id', (req, res) => {
  const { id } = req.params;
  const updatedRoom = req.body;

  // If only availability is being updated
  if (Object.keys(updatedRoom).length === 1 && updatedRoom.availability) {
    const query = `UPDATE rooms SET availability = ? WHERE id = ?`;
    db.query(query, [updatedRoom.availability, id], (err, result) => {
      if (err) throw err;
      res.json({ message: 'Room availability updated successfully' });
    });
  } else {
    // Update all room details
    const query = `
      UPDATE rooms 
      SET name = ?, picture = ?, amount = ?, availability = ?, discount = ?, duration = ?, foods = ?, gym_and_pool = ?
      WHERE id = ?
    `;
    db.query(
      query,
      [
        updatedRoom.name,
        updatedRoom.picture,
        updatedRoom.amount,
        updatedRoom.availability,
        updatedRoom.discount,
        updatedRoom.duration,
        updatedRoom.foods,
        updatedRoom.gym_and_pool,
        id,
      ],
      (err, result) => {
        if (err) throw err;
        res.json({ message: 'Room details updated successfully' });
      }
    );
  }
});

// Delete room
app.delete('/rooms/:id', (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM rooms WHERE id = ?`;
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Room deleted successfully' });
  });
});

// --- User Authentication API ---

// Create a new user
app.post('/create-account', (req, res) => {
  const { full_name, last_name, birth_date, id_number, gender, phone_number, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).send('Error hashing password');
    }

    const query = `
      INSERT INTO users (full_name, last_name, birth_date, id_number, gender, phone_number, password)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [full_name, last_name, birth_date, id_number, gender, phone_number, hashedPassword], (err, results) => {
      if (err) {
        return res.status(500).send('Error creating user');
      }
      res.status(201).send({ message: 'User created successfully' });
    });
  });
});

// Login user
app.post('/login', (req, res) => {
  const { id_number, password } = req.body;

  db.query('SELECT * FROM users WHERE id_number = ?', [id_number], (err, results) => {
    if (err) {
      return res.status(500).send('Error checking user');
    }

    if (results.length === 0) {
      return res.status(404).send('User not found');
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).send('Error comparing password');
      }

      if (!isMatch) {
        return res.status(401).send('Invalid password');
      }

      res.status(200).send({ message: 'Login successful', user });
    });
  });
});

// Admin login
app.post('/adminlogin', (req, res) => {
  const { id_number, password } = req.body;

  db.query('SELECT * FROM admindata WHERE id_number = ?', [id_number], (err, results) => {
    if (err) {
      return res.status(500).send('Error checking admin');
    }

    if (results.length === 0) {
      return res.status(404).send('Admin not found');
    }

    const admin = results[0];

    bcrypt.compare(password, admin.password, (err, isMatch) => {
      if (err) {
        return res.status(500).send('Error comparing password');
      }

      if (!isMatch) {
        return res.status(401).send('Invalid password');
      }

      res.status(200).send({ message: 'Login successful', admin });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});