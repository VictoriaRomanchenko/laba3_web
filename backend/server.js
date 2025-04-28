
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const db = new sqlite3.Database('./database.db');

app.use(cors());
app.use(bodyParser.json());

// Створити таблиці, якщо їх нема
db.serialize(() => {
  db.run(\`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL
    )
  \`);

  db.run(\`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  \`);
});

// API для контактів
app.get('/api/contacts', (req, res) => {
  db.all('SELECT * FROM contacts', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/api/contacts', (req, res) => {
  const { name, phone } = req.body;
  db.run('INSERT INTO contacts (name, phone) VALUES (?, ?)', [name, phone], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

app.put('/api/contacts/:id', (req, res) => {
  const { name, phone } = req.body;
  const { id } = req.params;
  db.run('UPDATE contacts SET name = ?, phone = ? WHERE id = ?', [name, phone, id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ updated: this.changes });
  });
});

app.delete('/api/contacts/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM contacts WHERE id = ?', id, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ deleted: this.changes });
  });
});

// API для реєстрації
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], function(err) {
    if (err) {
      res.status(400).json({ error: 'Email вже існує' });
      return;
    }
    res.json({ id: this.lastID });
  });
});

// API для логіну
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (row) {
      res.json({ success: true, user: row });
    } else {
      res.status(401).json({ success: false, error: 'Невірний email або пароль' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
