const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt'); // For password hashing

const app = express();
const port = 8081; 

app.use(cors());
app.use(express.json());

// Set up MySQL connection
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

/* ==================== ADMIN LOGIN ==================== */
app.post('/adminlogin', (req, res) => {
  const { id_number, password } = req.body;

  const query = 'SELECT * FROM admindata WHERE id_number = ?';
  db.query(query, [id_number], (err, results) => {
    if (err) return res.status(500).send(err);

    if (results.length === 0) {
      return res.status(401).json({ message: 'Admin not found' });
    }

    const admin = results[0];

    // Check if password matches
    if (admin.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    res.json({ message: 'Login successful', admin });
  });
});

/* ==================== USER LOGIN ==================== */
app.post('/login', (req, res) => {
  const { id_number, password } = req.body;

  db.query('SELECT * FROM users WHERE id_number = ?', [id_number], (err, results) => {
    if (err) return res.status(500).send('Error checking user');
    if (results.length === 0) return res.status(404).send('User not found');

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).send('Error comparing password');
      if (!isMatch) return res.status(401).send('Invalid password');

      res.status(200).send({ message: 'Login successful', user });
    });
  });
});

/* ==================== USER REGISTRATION ==================== */
app.post('/create-account', (req, res) => {
  const { full_name, last_name, birth_date, id_number, gender, phone_number, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).send('Error hashing password');

    const query = `
      INSERT INTO users (full_name, last_name, birth_date, id_number, gender, phone_number, password)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [full_name, last_name, birth_date, id_number, gender, phone_number, hashedPassword], (err) => {
      if (err) return res.status(500).send('Error creating user');
      res.status(201).send({ message: 'User created successfully' });
    });
  });
});

/* ==================== ROOMS API ==================== */
app.get('/rooms', (req, res) => {
  db.query('SELECT * FROM rooms', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.get('/rooms/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM rooms WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send('Room not found');
    res.json(results[0]);
  });
});

/* ==================== RESERVATIONS API ==================== */
app.post('/reservations', (req, res) => {
  const { user_id, room_id, check_in, check_out, total_price } = req.body;
  const query = 'INSERT INTO reservations (user_id, room_id, check_in, check_out, total_price) VALUES (?, ?, ?, ?, ?)';

  db.query(query, [user_id, room_id, check_in, check_out, total_price], (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: results.insertId, user_id, room_id, check_in, check_out, total_price });
  });
});

app.get('/reservations', (req, res) => {
  db.query('SELECT * FROM reservations', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.get('/reservations/user/:user_id', (req, res) => {
  const { user_id } = req.params;
  db.query('SELECT * FROM reservations WHERE user_id = ?', [user_id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.get('/reservations/details/:id', (req, res) => {
  const { id } = req.params;
  const query = `
    SELECT reservations.id, users.full_name AS user_name, rooms.name AS room_name, reservations.check_in, reservations.check_out
    FROM reservations
    JOIN users ON reservations.user_id = users.id
    JOIN rooms ON reservations.room_id = rooms.id
    WHERE reservations.id = ?
  `;

  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send('Reservation not found');
    res.json(results[0]);
  });
});

/* ==================== SERVER START ==================== */
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
