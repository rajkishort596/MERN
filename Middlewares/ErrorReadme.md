# Express Error Handling Guide

This guide explains how to handle different types of errors in Express applications, including custom error classes, async errors, Mongoose validation errors, and 404 handling. Robust error handling helps build secure and stable APIs.

---

🧩 What Is Error Handling in Express?
Error handling in Express means catching errors in middleware or route handlers and responding with an appropriate message, status code, or custom error page.

Express has a built-in mechanism for handling errors using special middleware — any middleware with four parameters:

```js
err, req, res, next;
```

## ✅ 1. Custom Error Class

Define a custom error class to throw standardized error responses throughout your app:

```js
// ExpressError.js
class ExpressError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

module.exports = ExpressError;
```

Usage:

```js
const ExpressError = require("./ExpressError");
throw new ExpressError(401, "Access Denied");
```

---

## ✅ 2. Middleware-Based Error Throwing

Throw errors in route handlers or middleware using `next(error)`:

```js
app.get("/api", (req, res, next) => {
  const { token } = req.query;
  if (token !== "giveaccess") {
    return next(new ExpressError(401, "Unauthorized Access"));
  }
  res.send("Protected Data");
});
```

---

## ✅ 3. Handling Async Errors with Try-Catch

Always use `try-catch` when using `async/await`:

```js
app.get("/user/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) throw new ExpressError(404, "User Not Found");
    res.send(user);
  } catch (err) {
    next(err);
  }
});
```

### 🔁 Reusable Async Wrapper

To avoid repeating `try-catch`, use a wrapper function:

```js
// utils/wrapAsync.js
module.exports = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};
```

Usage:

```js
const wrapAsync = require("./utils/wrapAsync");

app.get(
  "/users",
  wrapAsync(async (req, res) => {
    const users = await User.find();
    res.send(users);
  })
);
```

---

## ✅ 4. Handling Mongoose Errors

### a. Validation Errors

When Mongoose fails schema validation:

```js
app.post("/products", async (req, res, next) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (err) {
    if (err.name === "ValidationError") {
      next(new ExpressError(400, err.message));
    } else {
      next(err);
    }
  }
});
```

### b. CastError (Invalid ObjectId)

```js
app.get("/product/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) throw new ExpressError(404, "Product Not Found");
    res.send(product);
  } catch (err) {
    if (err.name === "CastError") {
      next(new ExpressError(400, "Invalid Product ID"));
    } else {
      next(err);
    }
  }
});
```

---

## ✅ 5. 404 Catch-All Middleware

This should be placed after all other routes:

```js
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});
```

---

## ✅ 6. Global Error Handler

Handles all errors in one place:

```js
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).json({
    error: {
      message,
      status,
    },
  });
});
```

---

## 🧪 Common Error Types & Handling

| Error Type               | Example                        | Handling Strategy                |
| ------------------------ | ------------------------------ | -------------------------------- |
| Invalid Route            | `/random`                      | 404 Middleware                   |
| Unauthorized Access      | Missing or invalid token       | Custom Middleware + ExpressError |
| Mongoose ValidationError | Missing required field in POST | Catch and throw ExpressError     |
| Mongoose CastError       | Invalid Mongo ObjectId         | Catch and throw 400 Bad Request  |
| Async route error        | `await` failure                | Use `try-catch` or `wrapAsync()` |

---

## ✅ Suggested Folder Structure

```
project/
│
├── app.js
├── ExpressError.js
├── utils/
│   └── wrapAsync.js
└── routes/
    └── users.js
```

---

## ✅ Conclusion

Effective error handling in Express apps improves security, debuggability, and user experience. With custom error classes, try-catch blocks, global error handlers, and async wrappers, your backend will be much more reliable and production-ready.

---
