# MongoDB Cheat Sheet (Beginner)

## 1. What is MongoDB?

MongoDB is a **NoSQL database** that stores data in a flexible, JSON-like format called **BSON** (Binary JSON). It is document-oriented, meaning data is stored in **collections** instead of tables (like in SQL databases).

---

## 2. Installation & Setup

### Installing MongoDB

- **Windows:** Download from [MongoDB website](https://www.mongodb.com/try/download/community) and follow the installation instructions.
- **Linux (Ubuntu/Debian):**
  ```bash
  sudo apt update
  sudo apt install -y mongodb
  sudo systemctl start mongodb  # Start MongoDB
  sudo systemctl enable mongodb # Enable on startup
  ```
- **Mac:** Use Homebrew:
  ```bash
  brew tap mongodb/brew
  brew install mongodb-community
  ```

### Starting MongoDB

- Run the server:
  ```bash
  mongod
  ```
- Open MongoDB shell:
  ```bash
  mongosh
  ```

---

## 3. Basic MongoDB Commands

### Show All Databases

```bash
show dbs
```

### Create/Use a Database

```bash
use myDatabase
```

(_If the database doesn’t exist, it will be created when you insert data._)

### Show Current Database

```bash
db
```

---

## 4. Collections & Documents

### Show Collections in a Database

```bash
show collections
```

### Create a Collection

MongoDB automatically creates a collection when you insert a document, but you can also create one explicitly:

```bash
db.createCollection("users")
```

### Insert a Document (Record)

```bash
db.users.insertOne({ name: "John", age: 25, city: "New York" })
```

### Insert Multiple Documents

```bash
db.users.insertMany([
  { name: "Alice", age: 30, city: "London" },
  { name: "Bob", age: 28, city: "Paris" }
])
```

---

## 5. Querying Data

### Show All Documents in a Collection

```bash
db.users.find()
```

### Pretty Print Output

```bash
db.users.find().pretty()
```

### Find a Specific Document

```bash
db.users.findOne({ name: "John" })
```

---

## 6. Updating Data

### Update a Single Document

```bash
db.users.updateOne(
  { name: "John" },
  { $set: { age: 26 } }
)
```

### Update Multiple Documents

```bash
db.users.updateMany(
  { city: "London" },
  { $set: { country: "UK" } }
)
```

---

## 7. Deleting Data

### Delete a Single Document

```bash
db.users.deleteOne({ name: "John" })
```

### Delete Multiple Documents

```bash
db.users.deleteMany({ city: "Paris" })
```

### Delete a Collection

```bash
db.users.drop()
```

### Delete a Database

```bash
db.dropDatabase()
```

---

## 8. Additional Useful Commands

### Count Documents in a Collection

```bash
db.users.countDocuments()
```

### Sort Results

```bash
db.users.find().sort({ age: 1 })  # Ascending order
```

### Limit Results

```bash
db.users.find().limit(2)
```

### Combining Sort & Limit

```bash
db.users.find().sort({ age: -1 }).limit(3)
```

---

## 9. Exiting MongoDB Shell

```bash
exit
```

---

## 10. Summary Table

| Command                                     | Description                                  |
| ------------------------------------------- | -------------------------------------------- |
| `show dbs`                                  | List all databases                           |
| `use dbName`                                | Switch to (or create) a database             |
| `show collections`                          | List all collections in the current database |
| `db.collection.insertOne({})`               | Insert a single document                     |
| `db.collection.insertMany([{},{},...])`     | Insert multiple documents                    |
| `db.collection.find()`                      | Retrieve all documents                       |
| `db.collection.updateOne({}, { $set: {} })` | Update a single document                     |
| `db.collection.deleteOne({})`               | Delete a single document                     |
| `db.collection.drop()`                      | Delete a collection                          |
| `db.dropDatabase()`                         | Delete the current database                  |
| `exit`                                      | Exit the MongoDB shell                       |

---

## Next Steps

- Learn about indexing to improve search performance
- Understand aggregation framework for complex queries
- Explore MongoDB Compass (GUI tool) for visualization
- Practice CRUD operations with real-world data

This cheat sheet covers the **basics of MongoDB** to get you started. Keep practicing and exploring!
