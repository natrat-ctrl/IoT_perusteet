const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

app.use(express.json());

// Yhdistetään tietokantaan
const db = new sqlite3.Database('./Mirandatabase.db', (err) => {
  if (err) return console.error(err.message);
  console.log('Connected to SQLite database');
});

// Luodaan users-taulu, jos sitä ei ole
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT, 
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
)`);

// Sensor API
app.get('/api/sensor', (req, res) => {
  res.json({
    temperature: 22.5,
    humidity: 55,
    status: 'OK'
  });
});

// Users GET
app.get('/api/users', (req, res) => {
  console.log('In get endpoint');
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Users POST
app.post('/api/users', (req, res) => {
  console.log('In post endpoint');
  const { name, email } = req.body;
  db.run(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email],
    function (err) {
      if (err) return res.status(400).json({ error: err.message });
      res.status(201).json({ id: this.lastID, name, email });
    }
  );
});

// Käynnistetään palvelin
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});