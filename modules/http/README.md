# Node.js HTTP Module Practice

## 📖 Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Creating an HTTP Server](#creating-an-http-server)
- [HTTP Request & Response Objects](#http-request--response-objects)
- [HTTP Methods](#http-methods)
- [Status Codes](#status-codes)
- [Headers](#headers)
- [Serving HTML & JSON](#serving-html--json)
- [Streaming with http](#streaming-with-http)
- [Comparison with Express](#comparison-with-express)
- [Conclusion](#conclusion)

---

## Introduction

The **http** module is the foundation for web servers in Node.js.  
It allows you to:

- Create a server that listens for incoming requests.
- Send responses (HTML, JSON, files, etc.) back to clients.
- Handle different HTTP methods (GET, POST, PUT, DELETE, etc.).
- Work with request/response headers and status codes.
- Follow Node.js's event-driven architecture (e.g., a server listens for "request" events).

---

## Key Features

| Feature           | Description                                                        |
|-------------------|--------------------------------------------------------------------|
| Create Servers    | Use `http.createServer()` to make a server.                        |
| Routing (Basic)   | Handle different URLs manually.                                    |
| Streaming         | Supports streaming large files without loading them fully into memory. |
| Low-Level Control | Direct access to headers, status codes, and raw request/response.  |
| Client Support    | Can also act as an HTTP client (`http.request`).                   |

---

## Creating an HTTP Server

The **http** module lets you create a web server that listens for requests and sends responses.  
You define a callback function that handles each incoming request, specifying how to respond based on the request details.  
The server listens on a specified port, waiting for clients (like browsers) to connect.

---

## HTTP Request & Response Objects

When you create an HTTP server, Node.js provides two main objects to your callback:

- **`req` (IncomingMessage):** Represents the client's request.  
  Common properties include:
  - `req.url` (requested URL)
  - `req.method` (HTTP method, e.g., GET, POST)
  - `req.headers` (request headers)

- **`res` (ServerResponse):** Represents the response you send back.  
  Common methods include:
  - `res.writeHead()` (set status code and headers)
  - `res.write()` (send data)
  - `res.end()` (end the response)

---

## HTTP Methods

The `req.method` property helps you handle different types of HTTP requests.  
You can check the method and respond accordingly.

| Method | Purpose                                      |
| ------ | -------------------------------------------- |
| GET    | Retrieve data (e.g., load a page).           |
| POST   | Send data to server (e.g., form submission). |
| PUT    | Update existing data.                        |
| DELETE | Remove data.                                 |

---

## Status Codes

Set HTTP status codes using `res.writeHead(statusCode, headers)` to indicate the result of a request.

| Code | Meaning                    |
| ---- | -------------------------- |
| 200  | OK – request successful    |
| 201  | Created – resource created |
| 400  | Bad Request                |
| 401  | Unauthorized               |
| 404  | Not Found                  |
| 500  | Internal Server Error      |

---

## Headers

Headers send metadata about requests and responses.

| Common Header    | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| `Content-Type`   | Tells browser how to interpret data (e.g., `text/html`, `application/json`). |
| `Content-Length` | Size of response body in bytes.                                              |
| `Set-Cookie`     | Send cookies to client.                                                      |
| `Authorization`  | Used for authentication tokens.                                              |

---

## Serving HTML & JSON

```js
// Serving HTML
res.writeHead(200, { "Content-Type": "text/html" });
res.end("<h1>Welcome to My Server</h1>");

// Serving JSON
res.writeHead(200, { "Content-Type": "application/json" });
res.end(JSON.stringify({ message: "Hello JSON" }));
```

---

## Streaming with http

The http module supports streaming, allowing you to send large files or data chunks efficiently without loading everything into memory at once.  
This is useful for serving videos, audio, or large downloads.

---

## Comparison with Express

| Feature         | `http` Module                | Express              |
| --------------- | ---------------------------- | -------------------- |
| **Level**       | Low-level                    | High-level framework |
| **Routing**     | Manual (`if (req.url)`)      | Built-in router      |
| **Middleware**  | Not available                | Yes, built-in        |
| **Ease of Use** | Verbose                      | Cleaner & simpler    |
| **Performance** | Very fast (minimal overhead) | Slight overhead      |

---

## Conclusion

- The **http** module is the core foundation of web servers in Node.js.
- It gives fine control over requests and responses.
- It’s lightweight and fast.
- For larger apps, frameworks like Express.js are built on top of it for easier routing, middleware, and scalability.

👉 If you understand http, Express and other frameworks