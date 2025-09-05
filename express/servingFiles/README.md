# 📂 Express.js File Handling (Part 2)

This document explains how to **send files** (text, PDFs, images) and **serve static assets** (HTML, CSS, JS) using Express.

---

## 📌 Why File Handling Matters?

Modern web apps need to:  
- Return **HTML pages** to users.  
- Send **images, PDFs, or documents**.  
- Serve **CSS, JavaScript, and media files**.  

Express provides **built-in helpers** to make this process easier.

---

## 1️⃣ Sending Files in Express

### 🔹 Use Cases

- Sending a PDF report to a client.  
- Serving a plain text file (like `robots.txt`).  
- Allowing file downloads (invoices, images, etc.).  

### 📌 Methods

| Method              | Purpose                                 |
|---------------------|-----------------------------------------|
| `res.sendFile(path)`| Sends a file to the browser (inline).   |
| `res.download(path)`| Prompts browser to download the file.   |

### 📝 Key Notes

- Files must be given with an **absolute path**.  
- Express automatically sets the **MIME type** based on the file.  

---

## 2️⃣ Serving HTML, CSS, JS Files

### ❓ Problem without Express

- With Node’s HTTP module, we must read files manually with `fs.readFile` and set headers.  
- This is repetitive and error-prone.  

### ✅ Express Solution

- Use `express.static()` middleware.  
- Any file placed in the **public folder** is automatically served.  

### 📂 Example Structure

```
public/
│── style.css
│── script.js
│── image.png
views/
│── index.html
```

### 🔑 Benefits

- No need to define routes for each file.  
- Automatically serves files with correct MIME type.  
- Supports HTML pages styled with CSS and linked to JS.  

---

## 📌 Example Request Flow

| Request        | Express Response                    |
|----------------|-------------------------------------|
| `/`            | Sends an HTML page (`index.html`).  |
| `/style.css`   | Serves the stylesheet automatically.|
| `/image.png`   | Returns the image.                  |
| `/download`    | Downloads a PDF file.               |

---

## 3️⃣ Advantages of Express File Handling

- **Less boilerplate** → no manual headers.  
- **Organized** → use `views/` for HTML, `public/` for assets.  
- **Flexible** → supports any file type.  
- **Secure** → only whitelisted static directories are served.  

---

## 📖 Summary

- Use `res.sendFile` for inline files.  
- Use `res.download` for forced downloads.  
- Use `express.static()` for CSS, JS, images.  
- Express simplifies file serving compared to raw Node