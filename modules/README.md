# Node.js Modules Practice

This project is created to understand **modules in Node.js**.  
Modules allow us to split our code into smaller, reusable pieces, making projects easier to manage and maintain.

---

## 🔹 What is a Module?

- A **module** in Node.js is simply a file containing code (functions, objects, variables, etc.) that can be reused in other files.  
- It helps avoid repetition and keeps the code organized.  
- There are two main module systems in Node.js:
  1. **CommonJS (CJS)**  
  2. **ES Modules (ESM)**  

---

## 🔹 CommonJS (CJS)

- The **original module system** in Node.js.  
- Uses `require()` to import and `module.exports` to export.  
- Still widely used in many Node.js projects and npm packages.  
- Default behavior in Node.js if you don’t specify otherwise.  

**Key Points:**
- Synchronous loading (runs immediately when required).  
- Entire module is cached after first `require()`.  
- Mostly used in older Node.js applications.  

---

## 🔹 ES Modules (ESM)

- The **modern, official JavaScript standard** for modules.  
- Uses `import` and `export`.  
- Supported in both browsers and Node.js.  
- Enabled in Node.js by setting `"type": "module"` in `package.json` or by using `.mjs` file extension.  

**Key Points:**
- Asynchronous and supports `top-level await`.  
- More readable and standardized across JavaScript.  
- Preferred for new Node.js projects.  

---

## 🔹 CommonJS vs ES Modules

| Feature              | CommonJS (CJS)              | ES Modules (ESM)            |
|----------------------|-----------------------------|-----------------------------|
| Import syntax        | `require()`                 | `import ... from ...`       |
| Export syntax        | `module.exports`            | `export` / `export default` |
| Standard             | Node.js-specific            | Official JS standard        |
| Execution            | Synchronous                 | Asynchronous                |
| Usage                | Older projects, many npm pkgs| Modern projects, browsers   |

---

## ✅ What This Project Covers

- Setting up a simple Node.js project.  
- Practicing **CommonJS modules** (older style).  
- Practicing **ESM modules** (modern style).  
- Understanding differences between the two.  

---


