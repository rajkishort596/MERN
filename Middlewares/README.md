## 🧩 What is Middleware in Express?

**Middleware** in Express is a function that has access to the following parameters:

- `req` (request object)
- `res` (response object)
- `next()` function — used to pass control to the next middleware

---

### ✅ What Can Middleware Do?

- Execute any code
- Modify `req` and `res` objects
- End the request-response cycle
- Call the next middleware in the stack using `next()`

---

### 📦 Types of Middleware

| Type                  | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| **Application-level** | Applied using `app.use()` or `app.get()`, `app.post()`, etc. |
| **Router-level**      | Applied using `express.Router()`                             |
| **Built-in**          | Like `express.static()`                                      |
| **Error-handling**    | Takes 4 arguments: `err, req, res, next`                     |
| **Third-party**       | Examples: `morgan`, `cors`, `body-parser`                    |

---

### 🧪 Middleware Syntax

```js
function middlewareName(req, res, next) {
  // logic goes here
  next(); // passes control to next middleware
}
```
