# 📘 MongoDB at a Glance

## 🌱 What is MongoDB?

- A NoSQL database (document-oriented).
- Stores data in JSON-like documents (BSON).
- Flexible schema (fields can differ between documents).
- Scales horizontally (good for big apps).

---

## ⚡ Installing MongoDB

1. **Download MongoDB Community Server:**  
   [mongodb.com/try/download](https://www.mongodb.com/try/download)
2. **Install MongoDB Compass** (GUI, optional but helpful).
3. **Install MongoDB Shell** (`mongosh`).
4. **Add `mongod` and `mongosh` to PATH** (so you can run in terminal).

---

## 🛠️ Setting up VS Code

**Recommended extensions:**

- **MongoDB for VS Code (Official):** Query & manage collections inside VS Code.
- **REST Client** or **Thunder Client:** Test APIs.
- **DotENV:** Highlight `.env` files (store DB URI).
- **Prettier & ESLint:** Cleaner code.
- **Node.js Intellisense + NPM Intellisense:** Autocompletes imports & packages.

---

## 📘 MongoDB Cheatsheet (Quick Reference)

### 🌱 Databases & Collections

| Command                        | Purpose                        |
| ------------------------------ | ------------------------------ |
| `show dbs`                     | List all databases             |
| `use myDB`                     | Switch/create database         |
| `db.createCollection("users")` | Create collection              |
| `show collections`             | List collections in current DB |
| `db.dropDatabase()`            | Delete current database        |
| `db.users.drop()`              | Drop a collection              |

---

### ✍️ Insert (Create)

| Command                               | Purpose                   |
| ------------------------------------- | ------------------------- |
| `db.users.insertOne({...})`           | Insert a single document  |
| `db.users.insertMany([{...}, {...}])` | Insert multiple documents |

---

### 🔎 Find (Read)

| Command                                  | Purpose                          |
| ---------------------------------------- | -------------------------------- |
| `db.users.find()`                        | Return all documents             |
| `db.users.find().pretty()`               | Pretty-print documents           |
| `db.users.find({ age: 25 })`             | Find with condition              |
| `db.users.find({}, { name: 1, _id: 0 })` | Projection (select fields)       |
| `db.users.find({ age: { $lt: 25 } })`    | Filter using comparison operator |

---

### ✏️ Update

| Command                                                                    | Purpose                 |
| -------------------------------------------------------------------------- | ----------------------- |
| `db.users.updateOne({ name: "Ali" }, { $set: { age: 23 } })`               | Update first match      |
| `db.users.updateMany({ age: { $lt: 25 } }, { $set: { status: "young" } })` | Update all matches      |
| `db.users.replaceOne({ name: "Ali" }, { name: "Ali", age: 30 })`           | Replace entire document |

---

### ❌ Delete

| Command                                      | Purpose            |
| -------------------------------------------- | ------------------ |
| `db.users.deleteOne({ name: "Ali" })`        | Delete first match |
| `db.users.deleteMany({ age: { $gte: 30 } })` | Delete multiple    |
| `db.users.drop()`                            | Drop a collection  |

---

### 🔀 Aggregation

| Stage      | Purpose                              |
| ---------- | ------------------------------------ |
| `$match`   | Filter documents                     |
| `$group`   | Group by field (like SQL `GROUP BY`) |
| `$sort`    | Sort ascending/descending            |
| `$project` | Reshape document fields              |
| `$limit`   | Limit number of docs                 |
| `$skip`    | Skip docs (pagination)               |

---

### Comparison Operators

| Operator | Purpose               |
| -------- | --------------------- |
| `$eq`    | Equal                 |
| `$ne`    | Not equal             |
| `$lt`    | Less than             |
| `$lte`   | Less than or equal    |
| `$gt`    | Greater than          |
| `$gte`   | Greater than or equal |
| `$in`    | Match any in array    |
| `$nin`   | Not in array          |

---

### Logical Operators

| Operator | Purpose                      |
| -------- | ---------------------------- |
| `$and`   | Logical AND                  |
| `$or`    | Logical OR                   |
| `$not`   | Negates expression           |
| `$nor`   | None of the conditions match |

---

### Update Operators

| Operator    | Purpose                 |
| ----------- | ----------------------- |
| `$set`      | Set/update field value  |
| `$unset`    | Remove a field          |
| `$inc`      | Increment numeric field |
| `$rename`   | Rename field            |
| `$push`     | Add item to array       |
| `$pull`     | Remove item from array  |
| `$addToSet` | Add item if not present |

---

### 🔎 Indexes & Text Search

| Command                                              | Purpose                      |
| ---------------------------------------------------- | ---------------------------- |
| `db.users.createIndex({ name: 1 })`                  | Create ascending index       |
| `db.users.createIndex({ name: -1 })`                 | Create descending index      |
| `db.users.createIndex({ bio: "text" })`              | Create text index for search |
| `db.users.find({ $text: { $search: "developer" } })` | Text search                  |
| `db.users.getIndexes()`                              | List indexes                 |
| `db.users.dropIndex("indexName")`                    | Drop specific index          |

---

### Example Workflow

```mermaid
flowchart TD
    A[Database] --> B[Collections]
    B --> C[Documents]
    C --> D[Fields (Key: Value)]

    A -->|use myDB| A
    B -->|db.createCollection()| B
    C -->|db.collection.insertOne()| C
    C -->|db.collection.find()| C
    C -->|db.collection.updateOne()| C
    C -->|db.collection.deleteOne()| C

    C --> E[Aggregation Pipeline]
    E --> F[$match / $group / $sort / $project]

    C --> G[Indexes]
    G --> H[Text / Single-field / Compound / Geo]
```

## 🚀 Quick Workflow

1. **Create database:**  
   `use myDB`
2. **Create collection:**  
   `db.createCollection("users")`
3. **Insert documents:**  
   `insertOne`, `insertMany`
4. **Query with filters/projections.**
5. **Update/delete as needed.**
6. **Use aggregation for analytics.**
7. **Add indexes for performance.**