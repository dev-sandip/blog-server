# 🛠️ Backend Template

This is a backend template for a MERN stack application using Node.js, Express, MongoDB, and TypeScript.

## 📑 Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Development](#development)
  - [Production](#production)
- [Environment Variables](#environment-variables)
- [License](#license)

## 📂 Project Structure

```
mern-backend/
│
├── dist/                     # Compiled JavaScript files
├── src/                      # Source files
│   ├── controllers/          # Route controllers
│   ├── db/                   # Database configurations
│   ├── middlewares/          # Custom middlewares
│   ├── models/               # Mongoose models
│   ├── router/               # Express routes
│   │   └── index.ts          # Main route file
│   ├── types/                # TypeScript types
│   ├── utils/                # Utility functions
│   ├── app.ts                # Express app configuration
│   └── index.ts              # Application entry point
├── .env                      # Environment variables
├── .gitignore                # Files and directories to ignore in git
├── package.json              # Project metadata and dependencies
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## ✨ Features

- **Express.js**: A minimal and flexible Node.js web application framework.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **MongoDB & Mongoose**: ODM to work with MongoDB databases.
- **Authentication**: Using `jsonwebtoken` and `bcrypt`.
- **Environment Variables**: Configuration via `.env` file.
- **CORS**: Cross-Origin Resource Sharing support.
- **Request Logging**: Using `morgan`.

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) >= 16.x
- [npm](https://www.npmjs.com/) >= 7.x
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dev-sandip/backend.git
   cd backend
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Create `.env` file**:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your MongoDB connection string and other configuration settings.

## 🚀 Usage

### 🛠️ Development

To start the development server with hot reloading:

```bash
pnpm run dev
```

This command runs both TypeScript compiler in watch mode and `nodemon` to automatically restart the server on changes.

### 📦 Production

To build and start the server in production mode:

```bash
pnpm run build
pnpm start
```

## 🌍 Environment Variables

Ensure to set the following environment variables in the `.env` file:

- `PORT`: The port on which the server will run (e.g., `3000`).
- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT authentication.
- `FRONTEND_URL`: URL of the frontend application.
- `FRONTEND_DOMAIN`: Domain of the frontend application.
- `AUTH_TOKEN_ID`: Name of the cookie to store the JWT token.
- `COOKIE_SECRET`: Secret key for cookie encryption.

Example `.env` file:

```
PORT=3000
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb://127.0.0.1:27017/backend
FRONTEND_DOMAIN=localhost
JWT_SECRET=secret
AUTH_TOKEN_ID=auth_token
COOKIE_SECRET=secret
```

## 📜 License

This project is licensed under the ISC License.
