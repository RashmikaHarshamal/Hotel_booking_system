const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 8081;  // Port to run your server

// Enable CORS for handling cross-origin requests
app.use(cors());

// Body parser to handle JSON requests
app.use(express.json());

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // MySQL username
  password: 'Rush@2001780',  // MySQL password
  database: 'hotel_booking_system',  // Database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

// Routes

// 1. Get all rooms
app.get('/rooms', (req, res) => {
  db.query('SELECT * FROM rooms', (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

// 2. Get a single room by ID
app.get('/rooms/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM rooms WHERE id = ?', [id], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    if (results.length === 0) {
      return res.status(404).send('Room not found');
    }
    res.json(results[0]);
  });
});

// 3. Create a new reservation
app.post('/reservations', (req, res) => {
  const { user_id, room_id, check_in, check_out, total_price } = req.body;
  const query = 'INSERT INTO reservations (user_id, room_id, check_in, check_out, total_price) VALUES (?, ?, ?, ?, ?)';

  db.query(query, [user_id, room_id, check_in, check_out, total_price], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(201).json({ id: results.insertId, user_id, room_id, check_in, check_out, total_price });
  });
});

// 4. Get all reservations
app.get('/reservations', (req, res) => {
  db.query('SELECT * FROM reservations', (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

// 5. Get reservations by user
app.get('/reservations/user/:user_id', (req, res) => {
  const { user_id } = req.params;
  db.query('SELECT * FROM reservations WHERE user_id = ?', [user_id], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

// 6. Get reservation details (with room and user info)
app.get('/reservations/details/:id', (req, res) => {
  const { id } = req.params;
  const query = `
    SELECT reservations.id, users.name AS user_name, rooms.name AS room_name, reservations.check_in, reservations.check_out
    FROM reservations
    JOIN users ON reservations.user_id = users.id
    JOIN rooms ON reservations.room_id = rooms.id
    WHERE reservations.id = ?
  `;
  
  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    if (results.length === 0) {
      return res.status(404).send('Reservation not found');
    }
    res.json(results[0]);
  });
});

// 7. Create a new user (for Create Account page)
app.post('/create-account', (req, res) => {
  const { full_name, last_name, birth_date, id_number, gender, phone_number, password } = req.body;

  // Hash the password before storing it
  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
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

// 8. Login user (for Login page)
app.post('/login', (req, res) => {
  const { id_number, password } = req.body;

  // Get user by ID number
  db.query('SELECT * FROM users WHERE id_number = ?', [id_number], (err, results) => {
    if (err) {
      return res.status(500).send('Error checking user');
    }

    if (results.length === 0) {
      return res.status(404).send('User not found');
    }

    const user = results[0];

    // Compare password with the stored hash
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).send('Error comparing password');
      }

      if (!isMatch) {
        return res.status(401).send('Invalid password');
      }

      // Authentication successful
      res.status(200).send({ message: 'Login successful', user });
    });
  });
});

// Start the server on port 8081
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
