# 📘 EJS Template Engine in Express

## 🌐 Introduction

When building web applications, developers often need to generate dynamic HTML. Instead of writing static HTML files, a template engine allows us to embed data and logic inside HTML.

**EJS (Embedded JavaScript)** is a popular template engine for Node.js and Express. It enables us to:

- Mix plain HTML with JavaScript.
- Inject dynamic data into templates.
- Reuse UI components with partials.
- Keep code clean and maintainable.

---

## ⚙️ Setting up EJS in Express

**Install:**
```bash
npm install ejs
```

**Configure Express:**
```js
app.set("view engine", "ejs");
```

By default, Express looks for `.ejs` files inside a `views/` folder at the project root.

---

## 📂 Views Folder in Express

- **Default:** Express assumes templates are stored in `views/`.
- **Custom Folder:** You can override with:
  ```js
  app.set("views", "path/to/custom-folder");
  ```

| Setting  | Example                             | Meaning                                  |
|----------|-------------------------------------|------------------------------------------|
| Default  | `views/`                            | Templates stored at root-level `views/`. |
| Custom   | `app.set("views", "src/templates")` | Templates now inside `src/templates`.    |

---

## 🔖 EJS Tags Overview

EJS gives us special syntax to embed JS into HTML.

| Tag Syntax | Purpose                               | Example                             | Output                       |
|------------|---------------------------------------|-------------------------------------|------------------------------|
| `<%= %>`   | Print **escaped** value (safe output) | `<%= name %>`                       | `Ahmed`                      |
| `<%- %>`   | Print **raw HTML** (unescaped)        | `<%- "<b>Hi</b>" %>`                | **Hi**                       |
| `<% %>`    | Run JS code (no output)               | `<% if (age > 18) { %>Adult<% } %>` | `Adult` if condition is true |
| `<%# %>`   | Comment (ignored in output)           | `<%# This will not show %>`         | (nothing)                    |
| `include`  | Insert a reusable partial             | `<%- include("partials/nav") %>`    | (HTML from partial file)     |

---

## 🔄 Partials in EJS

Partials are reusable template fragments.

- **Common use:** headers, navbars, footers.
- **Prevents repetition** → DRY principle.

**Example Workflow:**

- `partials/navbar.ejs` → navigation menu.
- `partials/footer.ejs` → footer.

**Include them in any page with:**
```ejs
<%- include("partials/navbar") %>
<%- include("partials/footer") %>
```

---

## 📊 Use Cases of EJS

EJS fits best when you want server-side rendering (SSR). Some real-world scenarios:

- **Blogs & CMS:** Render posts dynamically.
- **E-commerce:** Display product lists from a database.
- **Dashboards:** Generate charts and data tables on-the-fly.
- **Reusable Layouts:** Share navbar, footer, sidebar across pages.

---

## 🖼️ Visual Diagram

```mermaid
flowchart TD
    Browser[🌐 Browser] -- Request --> Express[⚡ Express.js (Server)]
    Express -- Controller logic --> Controller[🧩 Controller]
    Controller -- Variables --> EJS[📝 EJS Template]
    EJS -- Rendered HTML --> Express
    Express -- Response (HTML) --> Browser


---

## 📌 Key Takeaways

- **EJS = HTML + JavaScript** → generates dynamic views.
- **Default folder = `views/`**, but you can configure another.
- **Tags** allow printing, logic, and partials.
- **Partials** keep code DRY and reusable.
- Ideal for **server-side rendering** in Express apps.

---

✅ With this, you can confidently build dynamic and reusable views in your Express