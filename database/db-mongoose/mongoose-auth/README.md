# Authentication & User Management

Authentication and user management are at the heart of modern web applications. They ensure that only authorized users can access protected resources while user data is stored securely. This guide explains how to design and implement user registration and login with **Express.js**, **MongoDB**, and **Mongoose**, step by step.

---

## 📌 Why Authentication Matters

- **Security:** Protects sensitive data (passwords, personal info).
- **User Experience:** Provides personalized services (profiles, dashboards).
- **Access Control:** Restricts or grants access to specific features.

---

## 🏗️ User Registration Workflow

### 1. Designing the User Model

When creating a user, we must decide what fields to store in MongoDB. Common fields include:

| Field       | Type   | Required | Unique | Description                                |
| ----------- | ------ | -------- | ------ | ------------------------------------------ |
| `name`      | String | ✅        | ❌      | Full name of the user                      |
| `email`     | String | ✅        | ✅      | Acts as a unique identifier (username)     |
| `password`  | String | ✅        | ❌      | Stored in **hashed** form, never plaintext |
| `gender`    | String | ❌        | ❌      | "Male", "Female", "Other"                  |
| `phone`     | String | ❌        | ✅      | Optional but must be unique if provided    |
| `createdAt` | Date   | Auto     | ❌      | Automatically set by MongoDB               |

**Important Notes:**
- `email` and `phone` should be unique.
- `password` must be hashed before saving.
- Use validation rules to ensure correct data formats (e.g., regex for email).

---

### 2. Password Hashing with Bcrypt

- Passwords are **never** stored in plain text.
- Bcrypt applies salt + hashing to make it computationally expensive to reverse.

**Example flow:**
```
plainPassword → bcrypt.hash → hashedPassword → store in DB
```

**Benefits of hashing:**
- Prevents attackers from retrieving original passwords.
- Slows down brute-force attacks.
- Makes database leaks less damaging.

---

### 3. Storing User Data in MongoDB

- Use Mongoose schema to enforce rules (required, unique, length, regex).
- Errors such as "Email already exists" are handled at schema-level validation.

**Example validation logic:**
- If a duplicate email exists → throw `409 Conflict`.
- If password too short → throw `400 Bad Request`.

---

## 🔑 User Login Workflow

### 1. User Submits Login Request

**Inputs:** email + password.

Backend must check:
- Does the email exist in DB?
- If yes, compare entered password with stored hashed password.

---

### 2. Comparing Passwords

Use `bcrypt.compare` to check if the provided password matches the hashed one.

| Scenario        | Response                                    |
| --------------- | ------------------------------------------- |
| Email not found | "Invalid email or password" (generic error) |
| Wrong password  | "Invalid email or password" (generic error) |
| Both correct    | User logged in successfully                 |

> ⚠️ **Never reveal whether the email or password was specifically wrong** – always respond with a generic message like "Invalid email or password".

---

### 3. Returning Login Response

**On success:**
- Return success message.
- (Optional) Create a session or token for authentication.

**On failure:**
- Return clear but safe error messages.
- Ensure attackers can’t brute-force login attempts easily (rate limiting, delays).

---

## 📊 Registration vs. Login Comparison

| Step              | Registration                         | Login                |
| ----------------- | ------------------------------------ | -------------------- |
| Input             | Name, email, password, phone, gender | Email, password      |
| DB Operation      | Create new user                      | Find existing user   |
| Password Handling | Hash & store                         | Compare hash         |
| Errors            | Duplicate email, invalid data        | Wrong email/password |
| Outcome           | New user created                     | User authenticated   |

---

## ⚙️ Error Handling Strategy

| Type of Error        | Example Scenario        | Response Code | Message                             |
| -------------------- | ---------------------- | ------------- | ----------------------------------- |
| Validation Error     | Password too short      | 400           | "Password must be at least 6 chars" |
| Duplicate Entry      | Email already exists    | 409           | "Email already in use"              |
| Authentication Error | Wrong email or password | 401           | "Invalid email or password"         |
| Server Error         | DB connection failed    | 500           | "Something went wrong"              |

---

## 🖼️ Diagram: Authentication Flow

```
        [ User ]
           |
           v
   +-----------------+
   |  Registration   |
   +-----------------+
           |
     [ Validate Input ]
           |
           v
   [ Hash Password + Store ]
           |
           v
       [ MongoDB ]

        [ User ]
           |
           v
   +-----------------+
   |     Login       |
   +-----------------+
           |
     [ Validate Input ]
           |
           v
 [ Compare Passwords with Hash ]
           |
           v
   [ Success / Failure ]
```

---

## ✅ Key Takeaways

- Always store hashed passwords, never plaintext.
- Use schema-level validation for clean and consistent rules.
- Handle login errors with generic messages for security.
- Protect endpoints against brute force