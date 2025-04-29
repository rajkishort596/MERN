# Node.js and Express.js - Revision Notes

## 📘 Node.js Overview

- **Node.js** is a JavaScript runtime built on **Chrome's V8 JavaScript engine**.
- It is **event-driven**, **non-blocking (asynchronous)**, and used for **building scalable network applications**.

### 🔹 Key Features

- **Single-threaded event loop** architecture
- **Asynchronous I/O** (Non-blocking code execution)
- **Fast execution** with V8 engine
- **NPM** (Node Package Manager) ecosystem
- Suitable for **API servers**, **real-time apps**, **microservices**, etc.

### 🔹 How Node.js Works

- Single thread handles **multiple client requests**.
- Delegates I/O tasks (DB access, file read/write) to **background workers**.
- When task completes, the callback is added to the **event loop** for execution.

### 🔹 Important Node.js Concepts

| Concept         | Description                                                  |
| :-------------- | :----------------------------------------------------------- |
| **Event Loop**  | Manages execution of multiple asynchronous operations.       |
| **Callback**    | Function executed after an asynchronous operation.           |
| **Promise**     | Alternative to callbacks, to handle asynchronous operations. |
| **Async/Await** | Syntactic sugar over Promises for cleaner asynchronous code. |
| **Modules**     | Reusable blocks of code (Built-in, Custom, Third-party).     |
| **Streams**     | Handle reading/writing files or data piece-by-piece.         |
| **Buffer**      | Temporary storage for binary data.                           |

### 🔹 Node.js Built-in Modules

- `fs` — File system operations
- `http` — HTTP server functionalities
- `path` — File and directory path utilities
- `url` — URL parsing
- `events` — Event emitter
- `os` — Information about operating system
- `crypto` — Cryptographic functionalities

```javascript
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

## 📘 Express.js Overview

- **Express.js** is a **minimal** and **flexible** Node.js web application framework.
- Provides **robust features** for building **web and mobile applications**.

### 🔹 Key Features

- Lightweight and Fast
- Simplified **routing** mechanism
- Middleware support
- Easy to integrate **template engines** (EJS, Pug, Handlebars)
- RESTful API creation made easy
- Error handling mechanisms

### 🔹 Setting Up Express

```bash
npm init -y
npm install express
```

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

### 🔹 Basic Express Concepts

| Concept             | Description                                                      |
| :------------------ | :--------------------------------------------------------------- |
| **Routing**         | Handling client requests to specific URLs (endpoints).           |
| **Middleware**      | Functions that have access to `req`, `res`, and `next()` object. |
| **Request Object**  | Contains information about the HTTP request.                     |
| **Response Object** | Used to send response back to client.                            |
| **Error Handling**  | Middleware to catch and manage errors.                           |

---

## 📚 Express.js in Detail

### 🔹 Routing

```javascript
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/submit", (req, res) => {
  res.send("Form submitted");
});
```

- `app.get()`, `app.post()`, `app.put()`, `app.delete()` for different HTTP methods.

---

### 🔹 Middleware

- Middleware functions run during the lifecycle of a request.
- Example:

```javascript
app.use(express.json()); // Built-in middleware to parse JSON

app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});
```

Types of Middleware:

- Application-level middleware (`app.use`)
- Router-level middleware
- Error-handling middleware
- Built-in middleware (`express.json()`, `express.urlencoded()`)
- Third-party middleware (`morgan`, `cors`)

---

### 🔹 Serving Static Files

```javascript
app.use(express.static("public"));
```

- Serve static assets like HTML, CSS, images from the `public` folder.

---

### 🔹 Express Router

- Modularize routes into separate files.

```javascript
const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  res.send("About Page");
});

module.exports = router;
```

```javascript
const aboutRoutes = require("./routes/about");
app.use("/about", aboutRoutes);
```

---

### 🔹 Error Handling

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

---

### 🔹 Template Engines

- Allows dynamic generation of HTML using server-side variables.

Popular Template Engines:

- EJS
- Pug
- Handlebars

Example (EJS):

```javascript
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});
```

---

### 🔹 REST API Development (Simple Example)

```javascript
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  res.json(users);
});
```

---

## 📌 Common Third-Party Packages

| Package       | Purpose                                                 |
| :------------ | :------------------------------------------------------ |
| `nodemon`     | Automatically restarts the server on code changes.      |
| `morgan`      | HTTP request logger middleware.                         |
| `cors`        | Enable Cross-Origin Resource Sharing.                   |
| `dotenv`      | Load environment variables from `.env` file.            |
| `body-parser` | Parse incoming request bodies. (Now built into Express) |

---

## 🔥 Handy Commands

```bash
# Start server
node app.js

# Start server with auto-restart (nodemon)
npx nodemon app.js
```

---

## 🧠 Quick Tips

- Always handle errors properly (`try-catch` or error middleware).
- Organize large apps using Express Routers.
- Validate user inputs for APIs (use packages like `express-validator`).
- Store configuration data in `.env` file using `dotenv`.
- Follow RESTful principles when building APIs.

---

# 🚀 Summary Flow

```
User Request → Express Middleware → Route Handler → Controller Logic → Response
```

---

# ✍️ Revision Checklist

- [x] Understand Event Loop, Callback, Promises in Node.js
- [x] Know how to use built-in Node.js modules
- [x] Understand basic Express server setup
- [x] Master Express routing and middleware
- [x] Learn serving static files
- [x] Build simple REST APIs
- [x] Implement error handling
- [x] Modularize routes using Express Router
- [x] Use environment variables securely
- [x] Explore important third-party middleware
