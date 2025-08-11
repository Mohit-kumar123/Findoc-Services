
# Findoc Fullstack App (MERN)

**Live Application:** [https://findoc-services.vercel.app/](https://findoc-services.vercel.app/)

This project was built as a solution to the Findoc Gurugram assignment, which required a login and home screen with validation, API integration, and image display. Instead of Flutter, I implemented a robust fullstack MERN (MongoDB, Express, React, Node.js) application, focusing on scalable architecture, modern UI, and secure authentication.

---

## Assignment Context
The original assignment required a Flutter app with BLoC state management, login validation, and image fetching from https://picsum.photos/. I delivered a production-ready MERN stack web application with:
- Secure login/register (JWT-based authentication)
- Form validation (email & password rules as per assignment)
- Protected image gallery (fetches and displays images from backend)
- Modern, responsive UI (React + Tailwind CSS)
- Clean MVC backend structure (Node.js/Express)

---

---

## Features
- User registration and login (JWT-based authentication, with validation)
- Protected image gallery (upload/view images)
- Clean MVC backend structure (Node.js/Express)
- React frontend with Vite and Tailwind CSS
- RESTful API
- Responsive and modern UI
- Live deployment ([Vercel link](https://findoc-services.vercel.app/))

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
- Register a new user or use the demo credentials:
	- Email: `test@gmail.com`
	- Password: `Test123!`
- Access the dashboard to view/upload images (protected route).
- Logout to end your session.

---

## Deployment
- Backend: Deployable to Render, Heroku, or any Node.js host.
- Frontend: Deployed live on Vercel ([https://findoc-services.vercel.app/](https://findoc-services.vercel.app/)).

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
- [Mohit Kumar](https://github.com/Mohit-kumar123)

---

