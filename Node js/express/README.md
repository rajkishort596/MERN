
# Express.js Revision Guide

> A complete, concise, and detailed revision guide for Express.js – the minimal and flexible Node.js web application framework.

---

## 📦 What is Express.js?

**Express.js** is a lightweight Node.js web application framework that simplifies routing, middleware handling, server creation, and RESTful API development.

- Minimal: Does not enforce any structure or dependencies.
- Fast: Built on top of Node.js’s HTTP module.
- Flexible: Compatible with many middleware and template engines.

---

## 🚀 Setting Up Express

```bash
npm init -y
npm install express
```

**Basic Server Setup**
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

## 📍 Routing in Express

### ✅ Basic Routes
```js
app.get('/', (req, res) => res.send('Home Page'));
app.post('/submit', (req, res) => res.send('Form submitted'));
app.put('/update', (req, res) => res.send('Data updated'));
app.delete('/delete', (req, res) => res.send('Data deleted'));
```

### ✅ Route Parameters
```js
app.get('/users/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

### ✅ Query Parameters
```js
app.get('/search', (req, res) => {
  res.send(req.query); // e.g., /search?name=Raj
});
```

---

## 🧱 Middleware

Middleware functions have access to `req`, `res`, and `next()`.

```js
app.use(express.json()); // Built-in body parser

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

### Types of Middleware:
- **Application-level**
- **Router-level**
- **Built-in**: `express.json()`, `express.urlencoded()`
- **Error-handling**: `(err, req, res, next)`
- **Third-party**: `morgan`, `cors`

---

## 🗂️ Routing with Express Router

```js
// routes/user.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('All Users'));
router.get('/:id', (req, res) => res.send(`User ${req.params.id}`));

module.exports = router;

// In main app.js
const userRoutes = require('./routes/user');
app.use('/users', userRoutes);
```

---

## 🧾 Request & Response Objects

- **req.body** – Data from POST requests (requires middleware)
- **req.params** – Route parameters
- **req.query** – URL query parameters
- **res.send()** – Send a response
- **res.json()** – Send JSON data
- **res.status()** – Set status code

---

## 🗃️ Template Engines (Optional)

```bash
npm install ejs
```

```js
app.set('view engine', 'ejs');
app.get('/profile', (req, res) => {
  res.render('profile', { name: 'Raj' });
});
```

---

## 🔐 Express + Static Files

```js
app.use(express.static('public')); // public folder for CSS/JS/images
```

---

## 🌐 CORS in Express

```bash
npm install cors
```

```js
const cors = require('cors');
app.use(cors()); // Enables CORS for all routes
```

---

## ⚠️ Error Handling

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

---

## 🔐 Authentication & Security Tips

- Use **helmet** for HTTP header security.
- Use **bcryptjs** for password hashing.
- Use **jsonwebtoken (JWT)** for auth.
- Validate input using **express-validator**.

---

## 📁 Best Project Structure

```
project/
│
├── app.js
├── routes/
│   └── users.js
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── middlewares/
│   └── auth.js
├── public/
└── views/
```

---

## 📚 Useful Middleware Libraries

| Package         | Purpose                            |
|----------------|-------------------------------------|
| `morgan`        | Logging HTTP requests               |
| `helmet`        | Secure HTTP headers                 |
| `cors`          | Enable cross-origin resource sharing |
| `cookie-parser` | Parse Cookie headers                |
| `dotenv`        | Load environment variables          |

---

## 🔄 REST API with Express Example

```js
app.get('/api/posts', (req, res) => res.json(posts));
app.post('/api/posts', (req, res) => {
  const post = { title: req.body.title };
  posts.push(post);
  res.status(201).json(post);
});
```

---

## 🧪 Testing Express APIs

- Manual testing: Postman, curl
- Automated: `jest`, `supertest`

---

## 🧠 Final Tips for Interview/Revision

- Know the request lifecycle in Express.
- Understand difference between `app.use()` and `app.METHOD()`.
- Be clear on sync vs async middleware.
- Practice writing middleware and routers from scratch.
- Be comfortable with REST principles.

---

## 📌 Resources

- [Express Docs](https://expressjs.com/)
- [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [Node.js Docs](https://nodejs.org/en/docs)

---

Happy Coding! 🚀
