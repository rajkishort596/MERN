# 📘 Relationships in Databases (MongoDB Focus)

This document covers essential concepts related to handling relationships in databases, with a focus on MongoDB and Mongoose.

---

## 📌 1. What is a Relationship in Database?

A **relationship** defines how data in one collection or table is associated with data in another. This is key to structuring data efficiently and querying it effectively.

In MongoDB, relationships can be modeled in two primary ways:

- **Embedding (Denormalization)**
- **Referencing (Normalization)**

---

## 🫙 2. Embedding Documents

**Definition:** Embedding means storing related data directly within a single document.

### ✅ When to Use:

- Data is accessed together frequently.
- The embedded data is small in size.
- Low document growth.
- Higher read performance is needed.

### 💡 Example:

```js
const userSchema = new mongoose.Schema({
  username: String,
  address: [
    {
      location: String,
      city: String,
    },
  ],
});
```

---

## 🔗 3. Referencing Documents

**Definition:** Referencing involves storing the `_id` of a document from another collection using `ObjectId`.

This is similar to foreign keys in relational databases.

### ✅ When to Use:

- Related data is large or frequently updated.
- Data is shared across documents.
- To avoid duplication and maintain data consistency.

### 💡 Example:

```js
const customerSchema = new mongoose.Schema({
  name: String,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});
```

Here, the `orders` field contains references to `Order` documents via their `_id`.

---

## ⚖️ 4. Embedding vs Referencing

| Criteria             | Embedding                   | Referencing                    |
| -------------------- | --------------------------- | ------------------------------ |
| **Performance**      | Fast reads (fewer queries)  | Slower reads (requires joins)  |
| **Write Complexity** | Slower if document grows    | Faster writes for large data   |
| **Duplication**      | Higher                      | Lower                          |
| **Scalability**      | Poor if embedded data grows | Better for growing datasets    |
| **Simplicity**       | Easier queries              | Needs `populate()` in Mongoose |

---

## 🧠 5. Populate in Mongoose

In referenced relationships, the `populate()` function is used to retrieve full data from referenced documents using their `_id`.

### 💡 Example:

```js
Customer.find({}).populate("orders");
```

This will automatically replace the `ObjectId`s in the `orders` field with the actual order documents.

---

## 📏 6. 6 Rules of Thumb for MongoDB Schema Design

Source: [6 Rules of Thumb for MongoDB Schema Design](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design)

### 📜 Summary:

1. **Data that is accessed together should be stored together.**  
   → Prefer embedding when data is mostly read together.

2. **Design schemas based on application needs.**  
   → Optimize for query patterns, not strict normalization.

3. **Keep write operations simple and efficient.**  
   → Avoid overly complex transactions and joins.

4. **Use references for large or growing data arrays.**  
   → Avoid hitting the document size limit (16MB).

5. **Be aware of the 16MB document size limit.**  
   → Embedding huge arrays or large sub-documents can be problematic.

6. **Use schema versioning.**  
   → Helps when evolving document structure over time.

---

## 🧪 Example Projects

### 📁 Embedded Example

**User with multiple addresses**

```js
const userSchema = new mongoose.Schema({
  username: String,
  address: [{ location: String, city: String }],
});
```

### 📁 Referencing Example

**Customer with Orders**

```js
const customerSchema = new mongoose.Schema({
  name: String,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});
```

### 📁 Referencing (One-to-One)

**Post referencing User**

```js
const postSchema = new mongoose.Schema({
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
```

---

## ✅ Conclusion

Understanding when to use **embedding** vs **referencing** is crucial for efficient schema design in MongoDB. Always consider:

- Access patterns
- Data growth
- Performance
- Storage limits

Design schemas that make your queries fast and your application scalable! 💡
