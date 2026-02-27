# 🩸 BloodConnection — Full-Stack Application

> **A futuristic blood donation portal** connecting donors, hospitals, and volunteers through a modern React + Node.js + MongoDB stack.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [System Flowcharts](#system-flowcharts)
- [API Reference](#api-reference)
- [Database Schema](#database-schema)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

---

## Overview

BloodConnection is a full-stack web platform that streamlines blood donation logistics — matching available donors with hospital blood requests, managing donation events, and providing secure authentication via both password and OTP flows.

---

## Architecture

```mermaid
graph TB
    subgraph Client["🖥️ Frontend (React + Vite + TypeScript)"]
        UI[User Interface]
        Router[React Router]
        Forms[React Hook Form]
        Charts[Recharts]
    end

    subgraph Server["⚙️ Backend (Node.js + Express)"]
        API[REST API]
        Auth[Auth Middleware]
        Controllers[Controllers]
        Utils[Utilities]
    end

    subgraph Database["🗄️ MongoDB"]
        Users[(Users)]
        Donors[(Donors)]
        Requests[(Requests)]
        Events[(Events)]
        OTPs[(OTPs)]
    end

    subgraph External["📬 External Services"]
        Email[Email / Nodemailer]
        SMS[SMS Provider]
    end

    Client -->|HTTP / REST| Server
    Server --> Database
    Server --> External
```

---

## Tech Stack

```mermaid
graph LR
    subgraph FE["Frontend"]
        React["⚛️ React 18"]
        Vite["⚡ Vite 6"]
        TS["🔷 TypeScript"]
        Radix["🎨 Radix UI"]
        Tailwind["💨 Tailwind CSS"]
        Motion["🎞️ Framer Motion"]
        RHF["📝 React Hook Form"]
        Recharts["📊 Recharts"]
    end

    subgraph BE["Backend"]
        Node["🟢 Node.js"]
        Express["🚂 Express 4"]
        Mongoose["🍃 Mongoose 7"]
        JWT["🔑 JSON Web Token"]
        Bcrypt["🔒 Bcryptjs"]
        Nodemailer["📧 Nodemailer"]
    end

    subgraph DB["Database"]
        Mongo["🗄️ MongoDB"]
    end

    FE -->|API Calls| BE
    BE -->|ODM| DB
```

---

## System Flowcharts

### 🔐 Authentication Flow

```mermaid
flowchart TD
    Start([User Visits App]) --> Choice{Auth Method?}

    Choice -->|Email + Password| Register
    Choice -->|OTP| OTP_Flow

    Register["/api/auth/register\nPOST: name, email, password"] --> HashPW[Hash Password\nwith bcryptjs]
    HashPW --> SaveUser[(Save to MongoDB)]
    SaveUser --> LoginPage

    LoginPage["/api/auth/login\nPOST: email, password"] --> ValidateCreds{Valid\nCredentials?}
    ValidateCreds -->|No| ErrorMsg[❌ 400 Invalid Credentials]
    ValidateCreds -->|Yes| IssueJWT[🔑 Issue JWT Token\n7 day expiry]
    IssueJWT --> Authenticated([✅ Authenticated User])

    OTP_Flow["/api/auth/send-otp\nPOST: phoneOrEmail"] --> GenOTP[Generate 6-digit OTP\n5 min expiry]
    GenOTP --> StoreOTP[(Store OTP in MongoDB)]
    StoreOTP --> SendEmail{Is Email?}
    SendEmail -->|Yes| Nodemailer[📧 Send via Nodemailer]
    SendEmail -->|No| SMSProvider[📱 SMS Provider]
    Nodemailer --> VerifyOTP
    SMSProvider --> VerifyOTP

    VerifyOTP["/api/auth/verify-otp\nPOST: phoneOrEmail, code"] --> CheckOTP{Valid &\nNot Expired?}
    CheckOTP -->|No| ExpiredError[❌ Invalid or Expired OTP]
    CheckOTP -->|Yes| MarkUsed[Mark OTP as used]
    MarkUsed --> CreateOrFetch[Create/Fetch User]
    CreateOrFetch --> IssueJWT
```

---

### 🩸 Donor Management Flow

```mermaid
flowchart LR
    subgraph DonorAPI["Donor API — /api/donors"]
        POST_D["POST /\nCreate Donor"]
        GET_ALL["GET /\nList All Donors"]
        GET_ONE["GET /:id\nGet Donor by ID"]
        PUT_D["PUT /:id\nUpdate Donor"]
        DEL_D["DELETE /:id\nDelete Donor"]
    end

    subgraph Controller["donorController.js"]
        CD[createDonor]
        GD[getDonors]
        GDS[getDonor]
        UD[updateDonor]
        DD[deleteDonor]
    end

    subgraph Schema["Donor Schema"]
        NAME["name: String ✅"]
        BLOOD["bloodType: String ✅"]
        PHONE["phone: String"]
        EMAIL["email: String"]
        CITY["city: String"]
        LAST["lastDonationDate: Date"]
        AVAIL["available: Boolean"]
        REWARD["rewardPoints: Number"]
    end

    POST_D --> CD --> Schema
    GET_ALL --> GD --> Schema
    GET_ONE --> GDS --> Schema
    PUT_D --> UD --> Schema
    DEL_D --> DD --> Schema
```

---

### 🏥 Blood Request Lifecycle

```mermaid
stateDiagram-v2
    [*] --> Created: POST /api/requests

    Created --> Active: Request saved to DB
    Active --> Matched: Donor found for blood type
    Active --> Expired: No donor matched in time
    Matched --> Fulfilled: Donation completed
    Fulfilled --> [*]: DELETE /api/requests/:id
    Expired --> [*]: DELETE /api/requests/:id

    note right of Created
        Fields:
        - hospitalName
        - bloodTypeNeeded
        - units (default: 1)
        - urgency: Low/Medium/High
        - city
        - contact
    end note
```

---

### 📅 Event Management Flow

```mermaid
sequenceDiagram
    actor Admin
    participant Frontend
    participant Backend
    participant MongoDB

    Admin->>Frontend: Create new donation event
    Frontend->>Backend: POST /api/events
    Note right of Backend: { title, description,<br/>location, date }
    Backend->>MongoDB: Save Event document
    MongoDB-->>Backend: Event saved ✅
    Backend-->>Frontend: 201 Created + Event JSON
    Frontend-->>Admin: Event shown in list

    Admin->>Frontend: View all events
    Frontend->>Backend: GET /api/events
    Backend->>MongoDB: find().sort({ date: 1 })
    MongoDB-->>Backend: Sorted event list
    Backend-->>Frontend: 200 OK + Events array
    Frontend-->>Admin: Displays events chronologically

    Admin->>Frontend: Delete an event
    Frontend->>Backend: DELETE /api/events/:id
    Backend->>MongoDB: findByIdAndDelete
    MongoDB-->>Backend: Deleted ✅
    Backend-->>Frontend: { message: "Deleted" }
```

---

## API Reference

```mermaid
mindmap
  root((BloodConnection API))
    Auth
      POST /api/auth/register
      POST /api/auth/login
      POST /api/auth/send-otp
      POST /api/auth/verify-otp
    Donors
      POST /api/donors
      GET /api/donors
      GET /api/donors/:id
      PUT /api/donors/:id
      DELETE /api/donors/:id
    Requests
      POST /api/requests
      GET /api/requests
      DELETE /api/requests/:id
    Events
      POST /api/events
      GET /api/events
      DELETE /api/events/:id
```

---

## Database Schema

```mermaid
erDiagram
    USER {
        ObjectId _id PK
        String name
        String email UK
        String passwordHash
        String phone
        String role
        Date createdAt
    }

    OTP {
        ObjectId _id PK
        String phoneOrEmail
        String code
        Date expiresAt
        Boolean used
    }

    DONOR {
        ObjectId _id PK
        String name
        String bloodType
        String phone
        String email
        String city
        Date lastDonationDate
        Boolean available
        Number rewardPoints
        Date createdAt
    }

    REQUEST {
        ObjectId _id PK
        String hospitalName
        String bloodTypeNeeded
        Number units
        String urgency
        String city
        String contact
        Date createdAt
    }

    EVENT {
        ObjectId _id PK
        String title
        String description
        String location
        Date date
        Date createdAt
    }

    USER ||--o{ OTP : "generates"
    DONOR }o--o{ REQUEST : "matches blood type"
```

---

## Getting Started

### Prerequisites

```mermaid
graph LR
    Node["Node.js ≥ 18"] --> Backend
    MongoDB["MongoDB (local or Atlas)"] --> Backend
    Node --> Frontend
```

### 1. Clone & Setup Backend

```bash
cd backend
cp .env.example .env
# Edit .env with your values:
# PORT=5000
# MONGO_URI=mongodb://localhost:27017/bloodconnection
# JWT_SECRET=your_super_secret_key
# EMAIL_USER=your@email.com  (optional)
# EMAIL_PASS=your_password    (optional)

npm install
npm run dev
```

### 2. Setup Frontend

```bash
cd frontend
# Create .env file:
echo "VITE_API_URL=http://localhost:5000" > .env

npm install
npm run dev
```

### Local Dev Ports

| Service  | URL                      |
|----------|--------------------------|
| Frontend | http://localhost:3000    |
| Backend  | http://localhost:5000    |
| MongoDB  | mongodb://localhost:27017 |

---

## Project Structure

```mermaid
graph TD
    Root["📁 bloodconnection/"]
    Root --> FE["📁 frontend/"]
    Root --> BE["📁 backend/"]
    Root --> README["📄 README.md"]
    Root --> GitIgnore["📄 .gitignore"]

    FE --> FESrc["📁 src/"]
    FE --> FEPkg["📄 package.json"]
    FE --> FEVite["📄 vite.config.ts"]
    FE --> FEIndex["📄 index.html"]

    BE --> BERoutes["📁 routes/"]
    BE --> BEControllers["📁 controllers/"]
    BE --> BEModels["📁 models/"]
    BE --> BEUtils["📁 utils/"]
    BE --> BEServer["📄 server.js"]
    BE --> BEEnv["📄 .env.example"]
    BE --> BEPkg["📄 package.json"]

    BERoutes --> R1["auth.js"]
    BERoutes --> R2["donors.js"]
    BERoutes --> R3["requests.js"]
    BERoutes --> R4["events.js"]

    BEControllers --> C1["authController.js"]
    BEControllers --> C2["donorController.js"]
    BEControllers --> C3["requestController.js"]
    BEControllers --> C4["eventController.js"]

    BEModels --> M1["User.js"]
    BEModels --> M2["Donor.js"]
    BEModels --> M3["Request.js"]
    BEModels --> M4["Event.js"]
    BEModels --> M5["Otp.js"]

    BEUtils --> U1["sendMail.js"]
```

---

## Security Notes

> ⚠️ **Production Checklist**

- [ ] Remove `code` from `/api/auth/send-otp` response (dev-only feature)
- [ ] Set a strong `JWT_SECRET` in `.env`
- [ ] Use environment variables — never commit `.env`
- [ ] Integrate a proper SMS provider (Twilio, etc.) for phone OTPs
- [ ] Add rate limiting to auth endpoints
- [ ] Enable CORS whitelisting for production domains

---

## License

MIT — feel free to use and modify.

> Built with ❤️ for the BloodConnection project.
