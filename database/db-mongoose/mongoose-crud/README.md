# Learning Journey: Express + Mongoose CRUD

This document records a step-by-step journey of learning how to use **Mongoose with Express** to build and test APIs.  
It focuses on **core concepts, schemas, models, CRUD operations, and testing** using tools like **REST Client** and **MongoDB Compass**.

---

## 📊 The Flow of Data

The learning journey can be visualized like this:

```mermaid
flowchart LR
    Client[Client (REST Client / Browser)] -->|HTTP Request| Express[Express Route]
    Express -->|Uses| MongooseModel[Mongoose Model]
    MongooseModel -->|Validates with| Schema[Mongoose Schema]
    MongooseModel -->|Reads/Writes| MongoDB[(MongoDB Database)]
    MongoDB --> MongooseModel
    MongooseModel --> Express
    Express -->|HTTP Response (JSON)| Client
```

---

## 🧩 Core Concepts Learned

### Schemas

Define structure, validation, and defaults for data.

**Examples of rules:**
- `required` → ensures a field must be present.
- `default` → fills in a value automatically if none is provided.
- `min` / `max` → set numeric limits.
- `trim` → remove whitespace.
- `enum` → restrict allowed string values.
- transformations → e.g., store text in uppercase.

### Models

- Created from schemas.
- Act as the interface between Express routes and MongoDB.
- Provide methods like:
  - `find()`, `findById()` → read.
  - `save()` → create.
  - `findByIdAndUpdate()` → update.
  - `findByIdAndDelete()` → delete.

### Documents

- Instances of a model.
- Represent a single record in the database.
- Automatically follow schema rules.

---

## 🔄 CRUD Operations Table

| Operation | Description             | Typical Mongoose Method     | Example Use Case    |
|-----------|------------------------|----------------------------|---------------------|
| Create    | Add new data to MongoDB| `save()`                   | Add a new book      |
| Read      | Fetch data from MongoDB| `find()`, `findById()`     | List all books      |
| Update    | Modify existing data   | `findByIdAndUpdate()`      | Change book price   |
| Delete    | Remove data            | `findByIdAndDelete()`      | Remove a book       |

---

## 🧪 Testing with REST Client (`api.http`)

The REST Client extension in VS Code allows testing APIs with an `api.http` file.  
Each request can be written and executed to directly see the response.

**Example Requests:**
- **POST (Create):** Add a new resource.
- **GET (Read All):** Retrieve a list of resources.
- **GET (Read One):** Retrieve a resource by ID.
- **PUT (Update):** Modify a resource by ID.
- **DELETE (Delete):** Remove a resource by ID.

---

## 🟢 Typical Response Cases

| Case             | Status Code                 | Description                               | Example Response                        |
|------------------|----------------------------|-------------------------------------------|-----------------------------------------|
| Success (Create) | `201 Created`              | Resource was created successfully         | JSON with the created document          |
| Success (Read)   | `200 OK`                   | Data retrieved                            | JSON array of documents                 |
| Not Found        | `404 Not Found`            | Resource ID does not exist                | `{ "message": "Book not found" }`       |
| Validation Error | `400 Bad Request`          | Invalid input data (e.g., negative price) | `{ "message": "Validation failed" }`    |
| Server Error     | `500 Internal Server Error`| Unexpected error in code or DB            | `{ "message": "Something went wrong" }` |

---

## 🧰 Visual Testing Workflow

### REST Client

- Send CRUD requests in `api.http`.
- Verify responses (status codes + JSON).

### MongoDB Compass

- Visualize documents in the database.
- Confirm inserts, updates, and deletions.

### MongoDB VS Code Extension

- Explore the database without leaving the editor.
- Useful for quick queries and inspection.

---

## 🗝️ Key Lessons

- A **Schema** enforces structure and rules.
- A **Model** is the gateway to the database.
- A **Document** is a real piece of data stored.
- Express routes connect HTTP requests → Mongoose models → MongoDB.
- Testing with REST Client gives immediate feedback, while Compass provides a visual view.
- Proper error handling (`400`, `404`, `500`) makes an API