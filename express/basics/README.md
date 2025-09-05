# 🚀 Express.js Basics (Part 1)

This document covers the **first steps in Express.js**, including building a server, using environment variables, and validating them.  
It also compares **Node.js HTTP vs Express**.

---

## 📌 Why Express?

Express.js is a **web framework** for Node.js.  
It builds on top of Node’s **HTTP module** but provides a **simpler and more powerful** API.

---

## ⚖️ Node.js HTTP vs Express.js

| Feature            | Node.js HTTP Module                                 | Express.js                                 |
|--------------------|-----------------------------------------------------|--------------------------------------------|
| **Server Setup**   | Requires manual creation with `http.createServer()` | Single line: `express()`                   |
| **Routing**        | Must manually check `req.url` and `req.method`      | Built-in routing methods like `app.get()`  |
| **Static Files**   | Requires `fs` module handling                      | `express.static()` does it automatically   |
| **Error Handling** | Must implement manually                            | Middleware-based error handling            |
| **Middleware**     | Not available by default                           | Core concept, easy request processing      |
| **Learning Curve** | More boilerplate, lower-level                      | Faster development, higher-level           |

👉 **Conclusion**: Express is essentially a **shortcut and enhancement** over Node’s HTTP module.

---

## 1️⃣ Building the First Express Server

1. **Install Express:**  
   ```bash
   npm install express
   ```

2. **Create `index.js` and write minimal server logic.**

3. **Start server with:**  
   ```bash
   node index.js
   ```

4. **Visit:**  
   [http://localhost:3000](http://localhost:3000)

### 🔑 Key Points

- Express automatically sets up the HTTP listener.
- You define routes like `/`, `/about`, etc.
- Responses are easier with `res.send()`.

---

## 2️⃣ Environment Variables in Express

### ❓ What are Environment Variables?

- Values like `PORT`, API keys, and secrets that should **not be hard-coded**.
- They improve security and flexibility.
- Managed in a `.env` file.

### 📌 Example `.env` File

```env
PORT=3000
SECRET_KEY=mysecret123
```

### 📌 Why use them?

- Avoid leaking secrets in source code.
- Configure per environment (development, staging, production).
- Standard practice in modern applications.

---

## 3️⃣ Validating Environment Variables

### ❌ Problem

- Missing or incorrect environment variables cause runtime errors.

### ✅ Solutions

**Manual Check:**

```js
if (!process.env.SECRET_KEY) throw new Error("Missing SECRET_KEY");
```

**Using a Library (e.g., Zod):**

- Define a schema for expected environment variables.
- Automatically validate types (string, number, etc.).

### 🔑 Benefits of Validation

- Prevents server from starting with invalid config.
- Makes application more robust and secure.
- Improves developer experience by catching issues early.

---

## 📖 Summary

- Node.js HTTP is low-level; Express is developer-friendly.
- Environment variables secure sensitive data.
- **Always validate environment variables before starting the server.**