# Findoc Fullstack App

A fullstack MERN (MongoDB, Express, React, Node.js) application with authentication (login/register) and an image gallery. The backend uses a clean MVC structure and JWT authentication. The frontend is built with React (Vite) and Tailwind CSS.

---

## Features
- User registration and login (JWT-based authentication)
- Protected image gallery (upload/view images)
- Clean MVC backend structure
- React frontend with Tailwind CSS
- RESTful API

---

## Folder Structure

```
Findoc/
├── backend/           # Node.js/Express/MongoDB API
│   ├── controllers/   # Controller logic
│   ├── middleware/    # Auth & validation middleware
│   ├── models/        # Mongoose models
│   ├── routes/        # API routes
│   ├── .env           # Environment variables
│   ├── package.json   # Backend dependencies
│   └── server.js      # Entry point
│
├── frontend/          # React (Vite) + Tailwind CSS
│   ├── src/
│   │   ├── components/
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── App.jsx
│   ├── index.html
│   ├── package.json   # Frontend dependencies
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md          # Project documentation
```

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB Atlas account (or local MongoDB)
- Git

### 1. Clone the Repository
```sh
git clone https://github.com/Mohit-kumar123/Findoc-Services.git
cd Findoc-Services
```

### 2. Setup Backend
```sh
cd backend
cp .env.example .env   # Create your .env file and fill in values
npm install
npm start              # Starts backend on http://localhost:5000
```

#### .env Example
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 3. Setup Frontend
```sh
cd ../frontend
npm install
npm run dev            # Starts frontend on http://localhost:5173
```

---

## Usage
- Register a new user or login with existing credentials.
- Access the dashboard to view/upload images (protected route).
- Logout to end your session.

---

## Deployment
- Backend can be deployed to Render, Heroku, or any Node.js host.
- Frontend can be deployed to Vercel, Netlify, or any static host.

---

## API Endpoints
- `POST /api/auth/register` — Register user
- `POST /api/auth/login` — Login user
- `GET /api/images` — Get all images (protected)
- `POST /api/images` — Upload image (protected)

---

## Tech Stack
- **Backend:** Node.js, Express, MongoDB, JWT, bcryptjs
- **Frontend:** React (Vite), Tailwind CSS, axios, react-router-dom

---

## License
MIT

---

## Author
- [Your Name](https://github.com/YOUR_GITHUB_USERNAME)
