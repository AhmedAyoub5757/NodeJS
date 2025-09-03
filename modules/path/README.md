# Node.js Path Module Practice

This project is a hands-on guide to understanding and practicing the **`path` module** in Node.js.  
The `path` module is a **core Node.js module** that provides utilities for working with file and directory paths in a consistent, cross-platform way.

---

## 📖 Why Do We Need the Path Module?

File paths look different across operating systems:

- **Windows:** `C:\Users\Ahmed\Desktop\file.txt`
- **Linux/macOS:** `/home/ahmed/Desktop/file.txt`

Instead of manually writing OS-specific code, Node.js gives us the `path` module to handle paths automatically.  
This ensures your code works everywhere without breaking.

---

## ⚙️ Project Setup

1. **Create a project folder:**
   ```bash
   mkdir node-path-practice
   cd node-path-practice
   ```

2. **Initialize Node.js:**
   ```bash
   npm init -y
   ```

3. **Create entry files:**
   ```bash
   touch practice.js
   ```

---

## 🛠️ Core Path Methods

Here are the most commonly used functions of the path module:

### 1. `path.join([...paths])`

- Joins multiple path segments into one normalized path.
- Handles slashes (`/` or `\`) automatically.

### 2. `path.resolve([...paths])`

- Resolves a sequence of paths into an absolute path.
- Think of it like giving the full "Google Maps address" instead of just street + house.

### 3. `path.basename(path, [ext])`

- Returns the last part of a path (file name).
- Optional `ext` argument removes the file extension.

### 4. `path.dirname(path)`

- Returns the directory name (parent folder).

### 5. `path.extname(path)`

- Returns the file extension.

---

## 🌍 Real-World Use Cases

### Serving Static Files

```js
const path = require('path');
const filePath = path.join(__dirname, "public", "index.html");
```

### Handling File Uploads

```js
const savePath = path.join(__dirname, "uploads", "user123.png");
```

### Validating File Extensions

```js
if (path.extname("resume.pdf") !== ".pdf") {
  console.log("Only PDFs allowed!");
}
```

### Resolving Config Paths

```js
const configPath = path.resolve("config", "db.json");
```

---

## 📝 Summary

- Use `join` to combine path segments safely.
- Use `resolve` to get absolute paths.
- Use `basename` to extract file names (with or without extensions).
- Use `dirname` to get the parent folder.
- Use `extname` to identify file types.

The path module is essential for any Node.js backend project that deals with files, uploads, or