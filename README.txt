BloodConnection - Fullstack (Frontend + Backend)

Contents:
- frontend/   (your uploaded React + Vite + TypeScript frontend)
- backend/    (Node.js + Express + MongoDB backend added by assistant)

How to run locally (development):

1) Backend
- cd backend
- copy .env.example to .env and update values:
  PORT=5000
  MONGO_URI=your_mongo_connection_string (e.g. mongodb://localhost:27017/bloodconnection)
  JWT_SECRET=some_secret
  (optional) EMAIL_USER and EMAIL_PASS if you want OTP emails

- install dependencies:
  npm install

- run backend:
  npm run dev
  (or npm start)

API endpoints (base: http://localhost:5000):
- POST /api/auth/register    { name, email, password }
- POST /api/auth/login       { email, password } -> returns token
- POST /api/auth/send-otp    { phoneOrEmail } -> generates OTP (returns code in dev)
- POST /api/auth/verify-otp  { phoneOrEmail, code } -> returns token
- CRUD donors: /api/donors
- Requests: /api/requests
- Events: /api/events

2) Frontend
- cd frontend (the uploaded project)
- create a .env file for vite:
  VITE_API_URL=http://localhost:5000

- install frontend deps (in the frontend folder):
  npm install

- run frontend:
  npm run dev

Notes:
- This package does NOT run npm installs in the container. You must run npm install locally.
- The backend includes a demo OTP mechanism which stores OTPs in MongoDB; for production use, integrate a proper SMS/email provider and secure handling.
- If your frontend expects a different API shape, you may need to update calls to use VITE_API_URL or change endpoints accordingly.

Good luck! If you want, I can also:
- modify frontend code to read VITE_API_URL automatically and switch some demo pages to use the new API.
- add Dockerfile / docker-compose for local fullstack run.
