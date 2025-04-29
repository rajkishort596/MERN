
# Express.js + SQL CRUD Guide

> A complete revision guide on how to perform SQL database operations (MySQL/PostgreSQL/SQLite) using Express.js.

---

## 🛠️ Prerequisites

- Node.js and npm
- MySQL (or PostgreSQL/SQLite)
- Basic knowledge of SQL and Express

---

## 📦 Installing Required Packages

### For MySQL
```bash
npm install express mysql2
```

### For PostgreSQL
```bash
npm install express pg
```

---

## 🔌 SQL Connection with Express (MySQL Example)

```js
const mysql = require('mysql2');
const express = require('express');
const app = express();

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'testdb'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});
```

---

## 📁 Project Structure

```
project/
│
├── app.js
├── db.js
├── routes/
│   └── users.js
├── controllers/
│   └── userController.js
└── .env
```

---

## 📄 Create Table SQL (MySQL)
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INT
);
```

---

## 🧪 CRUD Operations with Express

### ➕ CREATE (POST)
```js
app.post('/users', (req, res) => {
  const { name, email, age } = req.body;
  const sql = 'INSERT INTO users (name, email, age) VALUES (?, ?, ?)';
  db.query(sql, [name, email, age], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId, name, email, age });
  });
});
```

### 📄 READ (GET)

- **All Users**
```js
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
```

- **Single User by ID**
```js
app.get('/users/:id', (req, res) => {
  db.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});
```

### ✏️ UPDATE (PUT)
```js
app.put('/users/:id', (req, res) => {
  const { name, email, age } = req.body;
  const sql = 'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?';
  db.query(sql, [name, email, age, req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'User updated' });
  });
});
```

### ❌ DELETE
```js
app.delete('/users/:id', (req, res) => {
  db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'User deleted' });
  });
});
```

---

## 🔐 SQL Injection Prevention

Use placeholders (`?`) instead of direct string interpolation.

```js
// ✅ Safe:
db.query('SELECT * FROM users WHERE id = ?', [userId]);

// ❌ Unsafe:
db.query(`SELECT * FROM users WHERE id = ${userId}`);
```

---

## ⚙️ Environment Variables (Optional)
Create a `.env` file:
```
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=testdb
```

Use `dotenv` to load:
```bash
npm install dotenv
```

```js
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});
```

---

## 🧪 Testing Tools

- **Postman** – API testing
- **MySQL Workbench / DBeaver** – GUI for SQL
- **Jest + Supertest** – Unit/API testing

---

## 🧠 Final Notes for Interview/Revision

- Know how to use connection pools for production.
- Understand error-first callbacks in MySQL Node drivers.
- Structure code using MVC pattern for maintainability.
- Practice parameterized queries for safety.
- Familiarize yourself with async/await and promises (via `mysql2/promise` or ORM).

---

## 📚 Resources

- [MySQL2 Docs](https://www.npmjs.com/package/mysql2)
- [Express.js Docs](https://expressjs.com/)
- [PostgreSQL + Node](https://node-postgres.com/)
- [Sequelize (ORM)](https://sequelize.org/)

---

Happy Querying! 🚀
