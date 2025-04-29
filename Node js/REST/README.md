
# RESTful API with Express.js – Revision Guide

> A complete revision guide for understanding and building RESTful APIs using Express.js

---

## 📘 What is a RESTful API?

REST (Representational State Transfer) is an architecture that uses HTTP methods to manage data via CRUD operations.

| HTTP Method | Description | Example Endpoint     |
|-------------|-------------|----------------------|
| GET         | Read        | /users               |
| POST        | Create      | /users               |
| PUT         | Update      | /users/:id           |
| DELETE      | Delete      | /users/:id           |

---

## 📦 Required Packages

```bash
npm init -y
npm install express
```

Optionally:
```bash
npm install nodemon cors body-parser dotenv
```

---

## 🏗️ Basic Project Structure

```
project/
├── server.js
├── routes/
│   └── userRoutes.js
├── controllers/
│   └── userController.js
└── models/
    └── userModel.js
```

---

## 🚀 Setting Up Express

### server.js

```js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json()); // Parse JSON body
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

## 📁 Sample Routes File

### routes/userRoutes.js

```js
const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
```

---

## 📂 Sample Controller

### controllers/userController.js

```js
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ message: 'User not found' });
};

exports.createUser = (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

exports.deleteUser = (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: 'User deleted' });
};
```

---

## 🧪 Testing the API

Use **Postman**, **Insomnia**, or **curl** to test endpoints:

```bash
curl -X GET http://localhost:5000/api/users
```

---

## ⚙️ Best Practices

- Use plural nouns (`/users`, not `/user`).
- Use proper status codes (200, 201, 400, 404, 500).
- Handle errors gracefully.
- Validate incoming data (use `express-validator` or `joi`).
- Use `.env` for config and `dotenv` to load it.

---

## 🧠 Interview and Revision Highlights

- REST is stateless.
- Routes represent *resources*.
- Each route should respond with a JSON object.
- Use middleware for parsing and authentication.
- Use controllers to separate logic from routes.

---

## 🌐 Useful Tools & Libraries

- `cors` – for enabling cross-origin requests
- `dotenv` – for environment variables
- `express-validator` – for request validation
- `morgan` – for logging requests
- `helmet` – for securing HTTP headers

---

## 🔒 Authentication

Use JWT (`jsonwebtoken`) or session-based auth for protected APIs.

---

## 📚 Resources

- [Express.js Docs](https://expressjs.com/)
- [Postman](https://www.postman.com/)
- [RESTful API Design](https://restfulapi.net/)

---

Happy Building! ⚡
