<div align="center">

```
██╗  ██╗ ██████╗ ███╗   ██╗ ██████╗      █████╗ ██████╗ ██╗
██║  ██║██╔═══██╗████╗  ██║██╔═══██╗    ██╔══██╗██╔══██╗██║
███████║██║   ██║██╔██╗ ██║██║   ██║    ███████║██████╔╝██║
██╔══██║██║   ██║██║╚██╗██║██║   ██║    ██╔══██║██╔═══╝ ██║
██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝    ██║  ██║██║     ██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝    ╚═╝  ╚═╝╚═╝     ╚═╝
```

**A blazing-fast REST API starter built with Hono + Node.js**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-E36002?style=for-the-badge&logo=hono&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

</div>

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| ⚡ **Hono** | Ultra-fast web framework |
| 🟢 **Node.js** | JavaScript runtime |

---

## 📁 Project Structure

```
hono-api/
├── 📄 index.js               # Entry point
├── 📂 routes/
│   └── user.js               # Route definitions
├── 📂 controllers/
│   └── userController.js     # Business logic
└── 📂 middleware/
    └── logger.js             # Request logger
```

---

## ⚙️ Installation

```bash
npm install
```

---

## ▶️ Run Server

```bash
npm run dev
```

> Server runs at → **`http://localhost:3000`**

---

## 🧪 API Endpoints

### `GET /` — Health Check

```json
{
  "message": "API running 🚀"
}
```

---

### `GET /user` — Fetch User

```json
{
  "id": 1,
  "name": "Mira",
  "status": "active"
}
```

---

### `POST /user` — Create User

**Request body:**
```json
{
  "name": "YourName"
}
```

**Response:**
```json
{
  "message": "User created ✅",
  "data": {
    "name": "YourName"
  }
}
```

---

## 🧩 Middleware

The logger middleware automatically logs every incoming request:

```
→ GET  /user
→ POST /user
```

---

## 🚀 Features

- ✅ Simple & clean project structure
- ✅ Modular routes & controllers
- ✅ Middleware support
- ✅ Fast performance out of the box

---

## 🔥 Roadmap

- [ ] 🔐 JWT Authentication
- [ ] 🗄️ Database integration *(MongoDB)*
- [ ] 🌐 Deploy to Cloudflare Workers
- [ ] ⚙️ Environment config *(.env support)*

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for details.

---

<div align="center">
  <sub>Built with ❤️ using <a href="https://hono.dev">Hono</a></sub>
</div>
