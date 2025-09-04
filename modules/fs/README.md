# Node.js `fs` Module

The **File System (`fs`) module** in Node.js provides a powerful API to interact with the file system. It enables you to create, read, update, and delete files and directories, as well as work with streams for efficient data handling.

---

## 📦 What is `fs`?

- **Built-in module**: No installation required.
- **CRUD operations**: Manage files and folders.
- **Sync & Async methods**: Choose between blocking and non-blocking operations.

---

## 🛠 Core Abilities

### Files

- **Create / Write**: `fs.writeFile()`
- **Read**: `fs.readFile()`
- **Update / Append**: `fs.appendFile()`
- **Delete**: `fs.unlink()`

### Directories

- **Create folder**: `fs.mkdir()`
- **Read folder contents**: `fs.readdir()`
- **Delete folder**: `fs.rmdir()`

---

## ⚡ Sync vs Async

- **Synchronous methods** (e.g., `fs.readFileSync`)  
  Block code execution until finished.
- **Asynchronous methods** (e.g., `fs.readFile`)  
  Non-blocking, preferred for servers.

> **Rule of thumb:**  
> - Use **Sync** for quick scripts or setup.  
> - Use **Async** for servers and production apps.

---

## 🌊 Streams

Streams allow you to process data in chunks, making it possible to handle large files efficiently.

- **Readable Stream**: `fs.createReadStream()`
- **Writable Stream**: `fs.createWriteStream()`
- **Pipe**: Connects readable to writable for efficient file copying.

### Benefits of Streams

- Handle large files (e.g., videos, logs)
- Save memory
- Process data as it arrives (e.g., video streaming)

---

## 🔑 Key Takeaways

- Use `fs` for file and directory operations.
- Prefer **async methods** in production.
- Use **streams** for large data handling.

---

