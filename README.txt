blood donor 

██████╗ ██╗      ██████╗  ██████╗ ██████╗
██╔══██╗██║     ██╔═══██╗██╔═══██╗██╔══██╗
██████╔╝██║     ██║   ██║██║   ██║██║  ██║
██╔══██╗██║     ██║   ██║██║   ██║██║  ██║
██████╔╝███████╗╚██████╔╝╚██████╔╝██████╔╝
╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝

 ██████╗ ██████╗ ███╗   ██╗███╗   ██╗███████╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗
██╔════╝██╔═══██╗████╗  ██║████╗  ██║██╔════╝██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║
██║     ██║   ██║██╔██╗ ██║██╔██╗ ██║█████╗  ██║        ██║   ██║██║   ██║██╔██╗ ██║
██║     ██║   ██║██║╚██╗██║██║╚██╗██║██╔══╝  ██║        ██║   ██║██║   ██║██║╚██╗██║
╚██████╗╚██████╔╝██║ ╚████║██║ ╚████║███████╗╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
```

### 🩸 *Connecting Lives. Saving Futures.*

**A futuristic full-stack blood donation portal — React 18 · Node.js · MongoDB**

---

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![JWT](https://img.shields.io/badge/JWT-Auth-FB015B?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

---

[🚀 Quick Start](#-quick-start) &nbsp;•&nbsp; [🏗️ Architecture](#%EF%B8%8F-system-architecture) &nbsp;•&nbsp; [📡 API Docs](#-api-reference) &nbsp;•&nbsp; [🗄️ Database](#%EF%B8%8F-database-design) &nbsp;•&nbsp; [🔐 Auth Flow](#-authentication-system) &nbsp;•&nbsp; [🛡️ Security](#%EF%B8%8F-security-checklist)

</div>

---

## 📖 Table of Contents

| Section | Description |
|---------|-------------|
| [✨ Features](#-features) | What BloodConnection can do |
| [🏗️ Architecture](#%EF%B8%8F-system-architecture) | High-level system design |
| [💻 Tech Stack](#-tech-stack) | All technologies used |
| [🔐 Authentication](#-authentication-system) | Auth flows & OTP mechanism |
| [🩸 Core Domain Flows](#-core-domain-flows) | Donor, request & event flows |
| [📡 API Reference](#-api-reference) | All REST endpoints |
| [🗄️ Database Design](#%EF%B8%8F-database-design) | Schemas & relationships |
| [📁 Project Structure](#-project-structure) | File & folder layout |
| [🚀 Quick Start](#-quick-start) | Run the project locally |
| [⚙️ Configuration](#%EF%B8%8F-environment-configuration) | Environment variables |
| [🛡️ Security Checklist](#%EF%B8%8F-security-checklist) | Production readiness |
| [🔮 Roadmap](#-future-enhancements) | Planned features |

---

## ✨ Features

<div align="center">

| 🔐 Authentication | 🩸 Donor Management | 🏥 Blood Requests | 📅 Events |
|:-----------------:|:-------------------:|:-----------------:|:---------:|
| Email + Password Login | Register as donor | Submit blood requests | Create donation drives |
| OTP via Email / Phone | Search & filter donors | Track urgency levels | List upcoming events |
| JWT Token (7-day expiry) | Manage availability status | Hospital contact info | Location & date tracking |
| Secure bcrypt hashing | Reward points system | Blood type matching | Admin event deletion |

</div>

### 🎨 Frontend Highlights

- ⚡ **Blazing fast** — Vite 6 with SWC compiler for instant HMR
- 🎨 **Beautiful UI** — 25+ Radix UI primitives styled with Tailwind CSS
- 🎞️ **Smooth animations** — Framer Motion & motion library
- 📊 **Data visualization** — Recharts with D3 under the hood
- 📝 **Form handling** — React Hook Form 7.55 with validation
- 🌙 **Dark / Light mode** — next-themes 0.4.6
- 🔔 **Toast notifications** — Sonner
- 🎹 **Command palette** — cmdk
- 📥 **Drawer component** — Vaul
- 🔢 **OTP input** — input-otp

### ⚙️ Backend Highlights

- 🛡️ **Secure auth** — JWT (7-day) + bcryptjs password hashing
- 📧 **Email OTPs** — Nodemailer with Gmail SMTP
- 🗄️ **MongoDB ODM** — Mongoose 7 with schema validation
- 🌐 **CORS ready** — Pre-configured for cross-origin requests
- 🔄 **Dev server** — nodemon for hot reload

---

## 🏗️ System Architecture

```mermaid
graph TB
    classDef frontend fill:#0d1b2a,stroke:#61DAFB,color:#61DAFB
    classDef backend fill:#0d1b2a,stroke:#68D391,color:#68D391
    classDef database fill:#0d1b2a,stroke:#48BB78,color:#48BB78
    classDef external fill:#0d1b2a,stroke:#F6AD55,color:#F6AD55

    subgraph FE["🖥️  FRONTEND  —  React 18 + Vite 6 + TypeScript"]
        direction LR
        UI["🎨 Radix UI\n+ Tailwind CSS"]
        Router["🔀 React Router\nClient Navigation"]
        Forms["📝 React Hook Form\nValidation & Submit"]
        Charts["📊 Recharts\nData Visualisation"]
        Motion["🎞️ Framer Motion\nAnimations"]
        Themes["🌙 next-themes\nDark / Light Mode"]
    end

    subgraph BE["⚙️  BACKEND  —  Node.js + Express 4.18"]
        direction LR
        Routes["🔀 Express Routes\n/api/auth\n/api/donors\n/api/requests\n/api/events"]
        MW["🛡️ Middleware\nCORS · JSON Parser"]
        CTRL["🎮 Controllers\nBusiness Logic"]
        JWT_MW["🔑 JWT\nAuthentication"]
        UTIL["🔧 Utilities\nbcrypt · sendMail"]
    end

    subgraph DB["🗄️  DATABASE  —  MongoDB + Mongoose 7"]
        direction LR
        Users[("👤 Users")]
        Donors[("🩸 Donors")]
        Requests[("🏥 Requests")]
        Events[("📅 Events")]
        OTPs[("🔑 OTPs")]
    end

    subgraph EXT["📬  EXTERNAL SERVICES"]
        Gmail["📧 Gmail SMTP\nNodemailer\nOTP Emails"]
        SMS["📱 SMS Provider\nPhone OTPs\n(configurable)"]
    end

    FE -->|"HTTP REST\nVITE_API_URL"| BE
    BE -->|"Mongoose ODM\nQueries"| DB
    BE -->|"Transactional\nNotifications"| EXT

    class FE frontend
    class BE backend
    class DB database
    class EXT external
```

---

## 💻 Tech Stack

```mermaid
graph LR
    subgraph FRONTEND["⚛️  Frontend"]
        direction TB
        R18["⚛️ React 18.3.1"]
        TS["🔷 TypeScript 5.x"]
        V6["⚡ Vite 6.3.5"]
        SWC["🔥 SWC Compiler\n@vitejs/plugin-react-swc"]
        RUI["🎨 Radix UI\n25+ Components"]
        TW["💨 Tailwind CSS"]
        FM["🎞️ Framer Motion\nmotion v12"]
        RC["📊 Recharts 2.15\n+ D3 libraries"]
        RHF["📝 React Hook Form 7.55"]
        NT["🌙 next-themes 0.4.6"]
        LR["🔷 lucide-react 0.487"]
        SON["🔔 Sonner 2.0\nToast Notifications"]
        CMD["⌨️ cmdk 1.1\nCommand Palette"]
        VAUL["📥 Vaul 1.1\nDrawer Component"]
        OTP_I["🔢 input-otp 1.4"]
        EMB["🎠 Embla Carousel 8.6"]
    end

    subgraph BACKEND["🟢  Backend"]
        direction TB
        NJ["🟢 Node.js ≥ 18"]
        EX["🚂 Express 4.18.2"]
        MG["🍃 Mongoose 7.0.3"]
        JW["🔑 jsonwebtoken 9.0"]
        BC["🔒 bcryptjs 2.4.3"]
        NM["📧 Nodemailer 6.9.1"]
        DT["📋 dotenv 16.0.3"]
        CO["🌐 cors 2.8.5"]
        ND["♻️ nodemon 2.0\nDev Hot-Reload"]
    end

    subgraph DATA["🗄️  Data"]
        MON["🍃 MongoDB"]
        ODM["Mongoose ODM\nSchema Validation"]
    end

    FRONTEND -->|"REST API Calls"| BACKEND
    BACKEND --> DATA
```

### 📦 Complete Dependency Table

| Layer | Package | Version | Purpose |
|-------|---------|---------|---------|
| **Frontend** | react | 18.3.1 | Core UI library |
| | react-dom | 18.3.1 | DOM rendering |
| | vite | 6.3.5 | Build tool & dev server |
| | @vitejs/plugin-react-swc | 3.11.0 | SWC-powered React compilation |
| | typescript (types) | 5.x | Type safety |
| | @radix-ui/* (x25) | various | Accessible UI primitives |
| | tailwind-merge | 3.5.0 | Tailwind class merging |
| | clsx | 2.1.1 | Conditional class names |
| | class-variance-authority | 0.7.1 | Component variants |
| | framer-motion | 12.34.3 | Animation engine |
| | motion | 12.34.3 | Motion library wrapper |
| | recharts | 2.15.4 | Chart components |
| | lucide-react | 0.487.0 | Icon library (500+ icons) |
| | react-hook-form | 7.55.0 | Form state management |
| | next-themes | 0.4.6 | Theme switching |
| | sonner | 2.0.7 | Toast notifications |
| | cmdk | 1.1.1 | Command palette |
| | vaul | 1.1.2 | Drawer component |
| | input-otp | 1.4.2 | OTP input field |
| | embla-carousel-react | 8.6.0 | Carousel/slider |
| | react-day-picker | 8.10.1 | Date picker |
| | react-resizable-panels | 2.1.9 | Resizable panel layouts |
| **Backend** | express | 4.18.2 | HTTP server framework |
| | mongoose | 7.0.3 | MongoDB ODM |
| | jsonwebtoken | 9.0.0 | JWT creation & verification |
| | bcryptjs | 2.4.3 | Password hashing |
| | nodemailer | 6.9.1 | Email delivery |
| | cors | 2.8.5 | Cross-origin resource sharing |
| | dotenv | 16.0.3 | Environment variables |
| | nodemon | 2.0.22 | Dev auto-restart |

---

## 🔐 Authentication System

### Dual-Mode Auth — Overview

```mermaid
graph LR
    USER(["👤 User"]) --> CHOICE{{"Auth\nMethod?"}}

    CHOICE -->|"📧 Password"| PW_FLOW["Password Flow\nregister → login → JWT"]
    CHOICE -->|"📱 OTP"| OTP_FLOW["OTP Flow\nsend-otp → verify-otp → JWT"]

    PW_FLOW --> JWT_ISSUED(["🔑 JWT Token\n7-day expiry"])
    OTP_FLOW --> JWT_ISSUED

    JWT_ISSUED --> PROTECTED["🛡️ Access Protected\nEndpoints"]
```

### Complete Authentication Flowchart

```mermaid
flowchart TD
    START(["👤 User Opens App"]) --> CHOICE{{"Choose\nAuth Method"}}

    CHOICE -->|"📧 Email + Password"| REG_OR_LOGIN{{"Register\nor Login?"}}
    CHOICE -->|"📱 OTP Based"| OTP_SEND

    %% ── Password Registration ──────────────────────────────────────────────
    REG_OR_LOGIN -->|"New User"| REGISTER["📮 POST /api/auth/register
    ─────────────────────────
    Body: { name, email,
             password, phone }"]

    REGISTER --> VALIDATE_REG{{"Email\nalready exists?"}}
    VALIDATE_REG -->|"Yes ❌"| ERR1[/"400 User already exists"\]
    VALIDATE_REG -->|"No ✅"| HASH["🔒 bcrypt.genSalt(10)
    bcrypt.hash(password, salt)"]
    HASH --> SAVE_USER[("💾 Save User\nto MongoDB")]
    SAVE_USER --> SUCCESS_REG[/"✅ 201 User Created"\]

    %% ── Password Login ─────────────────────────────────────────────────────
    REG_OR_LOGIN -->|"Returning User"| LOGIN["📮 POST /api/auth/login
    ─────────────────────────
    Body: { email, password }"]

    LOGIN --> FIND_USER{{"User\nfound?"}}
    FIND_USER -->|"No ❌"| ERR2[/"400 Invalid Credentials"\]
    FIND_USER -->|"Yes ✅"| CMP_PASS{{"bcrypt.compare\npass matches?"}}
    CMP_PASS -->|"Wrong ❌"| ERR2
    CMP_PASS -->|"Match ✅"| ISSUE_JWT

    %% ── OTP Send ──────────────────────────────────────────────────────────
    OTP_SEND["📮 POST /api/auth/send-otp
    ─────────────────────────
    Body: { phoneOrEmail }"]

    OTP_SEND --> GEN_CODE["🎲 Generate OTP
    Math.floor(100000 +
    Math.random()*900000)
    → 6-digit string"]

    GEN_CODE --> STORE_OTP[("💾 Store OTP
    expiresAt: now + 5 min
    used: false")]

    STORE_OTP --> IS_EMAIL{{"Is email\naddress?"}}
    IS_EMAIL -->|"Yes 📧"| NODEMAILER["📧 Nodemailer
    Gmail SMTP
    Send OTP email"]
    IS_EMAIL -->|"No 📱"| SMS_PROV["📱 SMS Provider
    Send OTP SMS"]

    NODEMAILER --> USER_RECEIVES["📬 User Receives\n6-Digit Code"]
    SMS_PROV --> USER_RECEIVES

    USER_RECEIVES --> VERIFY["📮 POST /api/auth/verify-otp
    ─────────────────────────
    Body: { phoneOrEmail, code }"]

    VERIFY --> FIND_OTP{{"Valid OTP\n& unused?"}}
    FIND_OTP -->|"No ❌"| ERR3[/"400 Invalid OTP"\]
    FIND_OTP -->|"Yes ✅"| CHECK_EXP{{"OTP expired?\n(> 5 min)"}}
    CHECK_EXP -->|"Yes ❌"| ERR4[/"400 OTP Expired"\]
    CHECK_EXP -->|"No ✅"| MARK_USED["✏️ Mark OTP\nused: true"]
    MARK_USED --> UPSERT["🔍 Find or Create\nUser record"]
    UPSERT --> ISSUE_JWT

    %% ── JWT Issuance ───────────────────────────────────────────────────────
    ISSUE_JWT["🔑 jwt.sign()
    ───────────────────
    Payload: { id, email }
    Secret: JWT_SECRET
    Expiry: 7 days"]

    ISSUE_JWT --> AUTH_DONE(["✅ Authenticated!
    Token returned to client"])

    style START fill:#1a1a2e,color:#e0e0e0,stroke:#61DAFB
    style AUTH_DONE fill:#0d4f2e,color:#68D391,stroke:#48BB78
    style ISSUE_JWT fill:#7b3f00,color:#F6AD55,stroke:#ED8936
    style ERR1 fill:#4a0000,color:#FC8181,stroke:#E53E3E
    style ERR2 fill:#4a0000,color:#FC8181,stroke:#E53E3E
    style ERR3 fill:#4a0000,color:#FC8181,stroke:#E53E3E
    style ERR4 fill:#4a0000,color:#FC8181,stroke:#E53E3E
```

---

## 🩸 Core Domain Flows

### Donor Management

```mermaid
flowchart LR
    subgraph ROUTES["📡 REST Endpoints — /api/donors"]
        direction TB
        R1["POST /\n➕ Create donor"]
        R2["GET /\n📋 List all donors"]
        R3["GET /:id\n🔍 Get single donor"]
        R4["PUT /:id\n✏️ Update donor"]
        R5["DELETE /:id\n🗑️ Remove donor"]
    end

    subgraph CTRL["🎮 donorController.js"]
        direction TB
        C1["createDonor()\n→ new Donor(body).save()\n→ 201 response"]
        C2["getDonors()\n→ Donor.find()\n→ sort: createdAt desc"]
        C3["getDonor()\n→ Donor.findById(id)\n→ 404 if not found"]
        C4["updateDonor()\n→ findByIdAndUpdate\n→ { new: true }"]
        C5["deleteDonor()\n→ findByIdAndDelete\n→ { message: 'Deleted' }"]
    end

    subgraph SCHEMA["🗂️ Donor Document"]
        direction TB
        S1["name ✅ required: String"]
        S2["bloodType ✅ required: String"]
        S3["phone: String"]
        S4["email: String"]
        S5["city: String"]
        S6["lastDonationDate: Date"]
        S7["available: Boolean — default: true"]
        S8["rewardPoints: Number — default: 0"]
        S9["createdAt: Date — default: now"]
    end

    R1 --> C1 --> SCHEMA
    R2 --> C2 --> SCHEMA
    R3 --> C3 --> SCHEMA
    R4 --> C4 --> SCHEMA
    R5 --> C5 --> SCHEMA
```

---

### Blood Request Lifecycle

```mermaid
stateDiagram-v2
    direction LR

    [*] --> Submitted : "🏥 POST /api/requests\nhospital submits"

    state Submitted {
        [*] --> Validated : Schema check ✅
        Validated --> [*]
    }

    Submitted --> Active : "Saved to MongoDB"

    state Active {
        [*] --> Low : 🟢 Low Urgency
        Low --> Medium : Escalate
        Medium --> High : 🔴 High Urgency
    }

    Active --> Matched : "🩸 Compatible donor\nfound & contacted"
    Active --> Expired : "⏰ Time window\npassed, no donor"

    state Matched {
        [*] --> DonorContacted
        DonorContacted --> DonationScheduled
        DonationScheduled --> [*]
    }

    Matched --> Completed : "✅ Donation done"
    Completed --> [*] : "DELETE /api/requests/:id"
    Expired --> [*] : "DELETE /api/requests/:id"

    note right of Active
        Request fields:
        ─────────────────
        hospitalName ✅
        bloodTypeNeeded ✅
        units (default: 1)
        urgency: Low|Medium|High
        city
        contact
        createdAt
    end note
```

---

### Event Management — Sequence Diagram

```mermaid
sequenceDiagram
    actor 👨‍💼 Admin
    participant 🖥️ Frontend as 🖥️ Frontend<br/>(React)
    participant ⚙️ Backend as ⚙️ Backend<br/>(Express)
    participant 🗄️ MongoDB

    rect rgb(13, 27, 42)
        Note over 👨‍💼 Admin,🗄️ MongoDB: ➕  CREATE EVENT
        👨‍💼 Admin->>🖥️ Frontend: Fill event form & submit
        🖥️ Frontend->>⚙️ Backend: POST /api/events<br/>{ title, description, location, date }
        ⚙️ Backend->>🗄️ MongoDB: new Event(body).save()
        🗄️ MongoDB-->>⚙️ Backend: Event document ✅
        ⚙️ Backend-->>🖥️ Frontend: 201 Created + Event JSON
        🖥️ Frontend-->>👨‍💼 Admin: ✅ Toast "Event created"
    end

    rect rgb(10, 31, 15)
        Note over 👨‍💼 Admin,🗄️ MongoDB: 📋  LIST EVENTS (sorted by date)
        👨‍💼 Admin->>🖥️ Frontend: Navigate to Events page
        🖥️ Frontend->>⚙️ Backend: GET /api/events
        ⚙️ Backend->>🗄️ MongoDB: Event.find().sort({ date: 1 })
        🗄️ MongoDB-->>⚙️ Backend: Sorted events array
        ⚙️ Backend-->>🖥️ Frontend: 200 OK + [ ...events ]
        🖥️ Frontend-->>👨‍💼 Admin: Renders chronological event cards
    end

    rect rgb(42, 13, 13)
        Note over 👨‍💼 Admin,🗄️ MongoDB: 🗑️  DELETE EVENT
        👨‍💼 Admin->>🖥️ Frontend: Click delete on event card
        🖥️ Frontend->>⚙️ Backend: DELETE /api/events/:id
        ⚙️ Backend->>🗄️ MongoDB: Event.findByIdAndDelete(id)
        🗄️ MongoDB-->>⚙️ Backend: Acknowledged ✅
        ⚙️ Backend-->>🖥️ Frontend: { message: "Deleted" }
        🖥️ Frontend-->>👨‍💼 Admin: Event removed from list
    end
```

---

## 📡 API Reference

### Base URL

```
Development:   http://localhost:5000
Production:    https://your-api-domain.com
```

### Complete API Mind Map

```mermaid
mindmap
  root(("🩸
BloodConnection
  REST API"))
    🔐 /api/auth
      POST /register
        name · email
        password · phone
        Returns 201
      POST /login
        email · password
        Returns JWT token
      POST /send-otp
        phoneOrEmail
        6-digit · 5 min
        ⚠️ code in dev only
      POST /verify-otp
        phoneOrEmail · code
        Returns JWT token
    🩸 /api/donors
      POST /
        Create donor
        name + bloodType required
      GET /
        All donors
        Sort: newest first
      GET /:id
        Single donor
        404 if not found
      PUT /:id
        Update donor
        Partial update ok
      DELETE /:id
        Hard delete
    🏥 /api/requests
      POST /
        Create request
        hospital + bloodType required
      GET /
        All requests
        Sort: newest first
      DELETE /:id
        Close request
    📅 /api/events
      POST /
        Create event
        title required
      GET /
        All events
        Sort: date ascending
      DELETE /:id
        Remove event
```

### Auth Endpoints

| Method | Endpoint | Request Body | Response | Notes |
|--------|----------|-------------|----------|-------|
| `POST` | `/api/auth/register` | `{ name, email, password, phone? }` | `201 { message }` | Hashes password with bcrypt |
| `POST` | `/api/auth/login` | `{ email, password }` | `200 { token, user }` | Returns 7-day JWT |
| `POST` | `/api/auth/send-otp` | `{ phoneOrEmail }` | `200 { message, code* }` | *code visible in dev only |
| `POST` | `/api/auth/verify-otp` | `{ phoneOrEmail, code }` | `200 { token }` | Marks OTP as used |

### Donor Endpoints

| Method | Endpoint | Body | Response | Description |
|--------|----------|------|----------|-------------|
| `POST` | `/api/donors` | Donor object | `201 donor` | Create donor |
| `GET` | `/api/donors` | — | `200 [donors]` | All donors, newest first |
| `GET` | `/api/donors/:id` | — | `200 donor` | Single donor by ID |
| `PUT` | `/api/donors/:id` | Partial donor | `200 donor` | Update donor fields |
| `DELETE` | `/api/donors/:id` | — | `200 { message }` | Delete donor |

### Request Endpoints

| Method | Endpoint | Body | Response | Description |
|--------|----------|------|----------|-------------|
| `POST` | `/api/requests` | `{ hospitalName, bloodTypeNeeded, units?, urgency?, city?, contact? }` | `201 request` | Submit blood request |
| `GET` | `/api/requests` | — | `200 [requests]` | All requests, newest first |
| `DELETE` | `/api/requests/:id` | — | `200 { message }` | Close/delete request |

### Event Endpoints

| Method | Endpoint | Body | Response | Description |
|--------|----------|------|----------|-------------|
| `POST` | `/api/events` | `{ title, description?, location?, date? }` | `201 event` | Create event |
| `GET` | `/api/events` | — | `200 [events]` | All events, by date asc |
| `DELETE` | `/api/events/:id` | — | `200 { message }` | Delete event |

---

## 🗄️ Database Design

### Entity Relationship Diagram

```mermaid
erDiagram
    USER {
        ObjectId  _id         PK  "Auto-generated"
        String    name            "Display name"
        String    email       UK  "Unique · required"
        String    passwordHash    "bcrypt(10 rounds)"
        String    phone           "Optional"
        String    role            "user or admin"
        Date      createdAt       "Default: Date.now"
    }

    OTP {
        ObjectId  _id           PK  "Auto-generated"
        String    phoneOrEmail      "Lookup key"
        String    code              "6-digit string"
        Date      expiresAt         "now + 5 minutes"
        Boolean   used              "Default: false"
    }

    DONOR {
        ObjectId  _id               PK  "Auto-generated"
        String    name                   "Required"
        String    bloodType              "Required: A+ B+ O- etc"
        String    phone                  "Contact number"
        String    email                  "Contact email"
        String    city                   "Donor location"
        Date      lastDonationDate       "Eligibility check"
        Boolean   available              "Default: true"
        Number    rewardPoints           "Default: 0"
        Date      createdAt              "Default: Date.now"
    }

    REQUEST {
        ObjectId  _id               PK  "Auto-generated"
        String    hospitalName           "Required"
        String    bloodTypeNeeded        "Required: A+ B- O+ etc"
        Number    units                  "Default: 1"
        String    urgency                "Low | Medium | High"
        String    city                   "Hospital location"
        String    contact                "Phone or email"
        Date      createdAt              "Default: Date.now"
    }

    EVENT {
        ObjectId  _id          PK  "Auto-generated"
        String    title             "Required"
        String    description       "Event details"
        String    location          "Venue address"
        Date      date              "Event date/time"
        Date      createdAt         "Default: Date.now"
    }

    USER ||--o{ OTP       : "generates per login attempt"
    DONOR }o--o{ REQUEST  : "blood type compatibility"
```

### Blood Type Compatibility

```mermaid
graph TD
    subgraph UNIVERSAL["⭐ Special Types"]
        ON["🌟 O−\nUniversal Donor\nDonates to ALL 8 types"]
        ABP["👑 AB+\nUniversal Recipient\nReceives from ALL 8 types"]
    end

    subgraph POSITIVE["🔴 Positive Types"]
        OP["O+"] -->|gives to| OPR["O+ · A+ · B+ · AB+"]
        AP["A+"] -->|gives to| APR["A+ · AB+"]
        BP["B+"] -->|gives to| BPR["B+ · AB+"]
        ABP2["AB+"] -->|gives to| ABPR["AB+ only"]
    end

    subgraph NEGATIVE["🔵 Negative Types"]
        AN["A−"] -->|gives to| ANR["A− · A+ · AB− · AB+"]
        BN["B−"] -->|gives to| BNR["B− · B+ · AB− · AB+"]
        ABN["AB−"] -->|gives to| ABNR["AB− · AB+"]
    end

    ON -->|gives to| ALLR["All 8 blood types"]

    style ON fill:#0d4f2e,color:#68D391,stroke:#48BB78
    style ABP fill:#3d1a4f,color:#D6BCFA,stroke:#9F7AEA
```

---

## 📁 Project Structure

```mermaid
graph TD
    classDef root fill:#1a1a2e,stroke:#e94560,color:#e94560,font-weight:bold
    classDef folder fill:#0f3460,stroke:#e94560,color:#93C5FD
    classDef file fill:#16213e,stroke:#0f3460,color:#A8B2D8
    classDef important fill:#533483,stroke:#e94560,color:#F3E8FF,font-weight:bold

    ROOT["📁 bloodconnection-fullstack/"]:::root

    ROOT --> FE["📁 frontend/"]:::folder
    ROOT --> BE["📁 backend/"]:::folder
    ROOT --> README_F["📄 README.md"]:::file
    ROOT --> GI["📄 .gitignore"]:::file

    %% ── Frontend ──────────────────────────────────────────────────────
    FE --> FE_SRC["📁 src/"]:::folder
    FE --> FE_IDX["📄 index.html\nApp HTML shell"]:::file
    FE --> FE_PKG["📄 package.json\n25+ UI dependencies"]:::important
    FE --> FE_VITE["📄 vite.config.ts\nPort 3000 · path aliases"]:::important

    FE_SRC --> FE_MAIN["📄 main.tsx\nReact 18 createRoot entry"]:::important
    FE_SRC --> FE_APP["📄 App.tsx\nRoot component"]:::important
    FE_SRC --> FE_COMP["📁 components/\nReusable UI components"]:::folder
    FE_SRC --> FE_PAGES["📁 pages/\nRoute views"]:::folder
    FE_SRC --> FE_HOOKS["📁 hooks/\nCustom React hooks"]:::folder
    FE_SRC --> FE_LIB["📁 lib/\nutilstn, helpers"]:::folder

    %% ── Backend ───────────────────────────────────────────────────────
    BE --> BE_SERVER["📄 server.js\nExpress init + MongoDB connect"]:::important
    BE --> BE_PKG["📄 package.json\nNode dependencies"]:::important
    BE --> BE_ENV["📄 .env.example\nEnvironment template"]:::important
    BE --> BE_ROUTES["📁 routes/"]:::folder
    BE --> BE_CTRL["📁 controllers/"]:::folder
    BE --> BE_MODELS["📁 models/"]:::folder
    BE --> BE_UTILS["📁 utils/"]:::folder

    %% Routes
    BE_ROUTES --> BR1["📄 auth.js\n4 endpoints"]:::file
    BE_ROUTES --> BR2["📄 donors.js\n5 endpoints"]:::file
    BE_ROUTES --> BR3["📄 requests.js\n3 endpoints"]:::file
    BE_ROUTES --> BR4["📄 events.js\n3 endpoints"]:::file

    %% Controllers
    BE_CTRL --> BC1["📄 authController.js\nregister · login\nsend-otp · verify-otp"]:::important
    BE_CTRL --> BC2["📄 donorController.js\nFull CRUD"]:::file
    BE_CTRL --> BC3["📄 requestController.js\nCreate · List · Delete"]:::file
    BE_CTRL --> BC4["📄 eventController.js\nCreate · List · Delete"]:::file

    %% Models
    BE_MODELS --> BM1["📄 User.js\nname · email · role"]:::file
    BE_MODELS --> BM2["📄 Donor.js\nbloodType · rewardPoints"]:::file
    BE_MODELS --> BM3["📄 Request.js\nhospital · urgency"]:::file
    BE_MODELS --> BM4["📄 Event.js\ntitle · date · location"]:::file
    BE_MODELS --> BM5["📄 Otp.js\ncode · expiry · used"]:::file

    %% Utils
    BE_UTILS --> BU1["📄 sendMail.js\nNodemailer Gmail SMTP"]:::file
```

### Quick File Reference

| File | Role |
|------|------|
| `backend/server.js` | Express app boot, MongoDB connect, route mounting |
| `backend/routes/auth.js` | POST register · login · send-otp · verify-otp |
| `backend/routes/donors.js` | Full CRUD: GET/POST/PUT/DELETE donors |
| `backend/routes/requests.js` | POST/GET/DELETE blood requests |
| `backend/routes/events.js` | POST/GET/DELETE donation events |
| `backend/controllers/authController.js` | register, login, sendOtp, verifyOtp logic |
| `backend/controllers/donorController.js` | createDonor, getDonors, getDonor, updateDonor, deleteDonor |
| `backend/controllers/requestController.js` | createRequest, getRequests, deleteRequest |
| `backend/controllers/eventController.js` | createEvent, getEvents, deleteEvent |
| `backend/models/User.js` | Schema: name, email(unique), passwordHash, phone, role |
| `backend/models/Donor.js` | Schema: bloodType(req), available, rewardPoints |
| `backend/models/Request.js` | Schema: hospitalName(req), bloodTypeNeeded(req), urgency |
| `backend/models/Event.js` | Schema: title(req), description, location, date |
| `backend/models/Otp.js` | Schema: code, expiresAt, used (boolean flag) |
| `backend/utils/sendMail.js` | Nodemailer Gmail transport, graceful skip if unconfigured |
| `frontend/vite.config.ts` | Vite 6 config, port 3000, `@` alias → `./src`, version aliases |
| `frontend/index.html` | HTML shell, mounts `<div id="root">` |

---

## 🚀 Quick Start

### Prerequisites Check

```mermaid
graph LR
    A["✅ Node.js ≥ 18\nnodejs.org/download"] --> C
    B["✅ MongoDB\nlocal or Atlas"] --> C
    C["Clone Repo"] --> D["Setup Backend"]
    D --> E["Setup Frontend"]
    E --> F["🎉 App running\nlocalhost:3000"]
```

### Step 1 — Clone

```bash
git clone https://github.com/your-username/bloodconnection.git
cd bloodconnection
```

### Step 2 — Backend Setup

```bash
cd backend

# Copy and configure environment
cp .env.example .env
# Edit .env — see Configuration section below

# Install all dependencies
npm install

# Start dev server (nodemon, auto-restarts)
npm run dev

# ✅ Running on http://localhost:5000
```

### Step 3 — Frontend Setup

```bash
# Open a new terminal tab
cd frontend

# Create frontend env
echo "VITE_API_URL=http://localhost:5000" > .env

# Install all dependencies
npm install

# Start dev server (Vite HMR)
npm run dev

# ✅ App opens at http://localhost:3000
```

### Step 4 — Verify the Stack

```mermaid
sequenceDiagram
    participant You
    participant Browser
    participant Backend
    participant MongoDB

    You->>Browser: Open http://localhost:3000
    Browser-->>You: ✅ React app renders

    You->>Backend: curl http://localhost:5000/api/donors
    Backend->>MongoDB: Donor.find()
    MongoDB-->>Backend: []
    Backend-->>You: ✅ 200 [] — Stack working!
```

### Available Scripts

| Location | Command | Effect |
|----------|---------|--------|
| `backend/` | `npm run dev` | Start with nodemon (hot reload) |
| `backend/` | `npm start` | Start with node (production) |
| `frontend/` | `npm run dev` | Vite dev server on port 3000 |
| `frontend/` | `npm run build` | Production build → `build/` folder |

### Port Reference

| Service | URL | Description |
|---------|-----|-------------|
| 🖥️ Frontend | http://localhost:3000 | Vite dev server |
| ⚙️ Backend | http://localhost:5000 | Express API server |
| 🗄️ MongoDB | mongodb://localhost:27017 | Local MongoDB |

---

## ⚙️ Environment Configuration

### `backend/.env`

```env
# ─── Server ───────────────────────────────────────────────────────────────────
PORT=5000

# ─── MongoDB ──────────────────────────────────────────────────────────────────
# Local development:
MONGO_URI=mongodb://localhost:27017/bloodconnection

# MongoDB Atlas (cloud/production):
# MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/bloodconnection

# ─── JWT ──────────────────────────────────────────────────────────────────────
# ⚠️ CHANGE THIS in production! Use a 64+ char random string.
JWT_SECRET=change_this_to_a_very_long_random_secret_in_production

# ─── Email OTP (optional) ─────────────────────────────────────────────────────
# Required only if you want OTP emails to actually send.
# Use a Gmail App Password (not your regular Gmail password).
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password_here
```

### `frontend/.env`

```env
# ─── API Base URL ─────────────────────────────────────────────────────────────
VITE_API_URL=http://localhost:5000

# For production deployment:
# VITE_API_URL=https://api.your-bloodconnection-domain.com
```

### Variable Reference

| Variable | Where | Required | Default | Description |
|----------|-------|----------|---------|-------------|
| `PORT` | backend | ✅ | `5000` | Express server port |
| `MONGO_URI` | backend | ✅ | — | Full MongoDB connection string |
| `JWT_SECRET` | backend | ✅ | `"secret"` | JWT signing key — **change in prod!** |
| `EMAIL_USER` | backend | ⚠️ | — | Gmail address for sending OTPs |
| `EMAIL_PASS` | backend | ⚠️ | — | Gmail App Password |
| `VITE_API_URL` | frontend | ✅ | — | Backend URL for API calls |

---

## 🛡️ Security Checklist

```mermaid
graph TD
    PROD(["🚀 Going to Production?"]) --> S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9 & S10

    S1["🔴 CRITICAL\nRemove OTP code from\nsend-otp API response"]
    S2["🔴 CRITICAL\nReplace JWT_SECRET with\n64+ char random string"]
    S3["🔴 CRITICAL\nForce HTTPS / SSL\non your domain"]
    S4["🟡 IMPORTANT\nWhitelist origins in\nCORS configuration"]
    S5["🟡 IMPORTANT\nRate-limit auth endpoints\nexpress-rate-limit"]
    S6["🟡 IMPORTANT\nAdd JWT middleware\nto protect write routes"]
    S7["🟡 IMPORTANT\nUse MongoDB Atlas\nwith IP whitelisting"]
    S8["🟡 IMPORTANT\nUse Gmail App Password\nnot your main password"]
    S9["🟢 RECOMMENDED\nIntegrate real SMS\nTwilio / AWS SNS"]
    S10["🟢 RECOMMENDED\nAdd input sanitization\nexpress-validator"]

    style S1 fill:#4a0000,color:#FC8181,stroke:#E53E3E
    style S2 fill:#4a0000,color:#FC8181,stroke:#E53E3E
    style S3 fill:#4a0000,color:#FC8181,stroke:#E53E3E
    style S4 fill:#4a2200,color:#FBD38D,stroke:#ED8936
    style S5 fill:#4a2200,color:#FBD38D,stroke:#ED8936
    style S6 fill:#4a2200,color:#FBD38D,stroke:#ED8936
    style S7 fill:#4a2200,color:#FBD38D,stroke:#ED8936
    style S8 fill:#4a2200,color:#FBD38D,stroke:#ED8936
    style S9 fill:#0d2d0d,color:#9AE6B4,stroke:#48BB78
    style S10 fill:#0d2d0d,color:#9AE6B4,stroke:#48BB78
```

| Priority | Check | Action |
|----------|-------|--------|
| 🔴 Critical | OTP code in response | Remove from `sendOtp` controller |
| 🔴 Critical | Weak JWT secret | Generate with `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"` |
| 🔴 Critical | HTTP in production | Configure SSL certificate |
| 🟡 Important | CORS wildcard `*` | Replace with `origin: ['https://your-domain.com']` |
| 🟡 Important | No rate limiting | `npm install express-rate-limit` |
| 🟡 Important | Unprotected writes | Add `verifyToken` middleware to POST/PUT/DELETE routes |
| 🟡 Important | Local MongoDB | Migrate to MongoDB Atlas |
| 🟢 Recommended | Demo SMS | Integrate Twilio or AWS SNS |
| 🟢 Recommended | No validation | Add `express-validator` |

---

## 🔮 Future Enhancements

```mermaid
graph LR
    NOW["🟢 v1.0\nCurrent"] --> V2["🔵 v2.0\nPlanned"] --> V3["🟣 v3.0\nRoadmap"]

    subgraph C["✅ v1.0 — Shipped"]
        C1["Donor CRUD"]
        C2["Blood Requests"]
        C3["Event Management"]
        C4["JWT Auth"]
        C5["OTP Email/SMS"]
        C6["Reward Points"]
    end

    subgraph P["🔵 v2.0 — Planned"]
        P1["⚡ Real-time Notifications\nSocket.io"]
        P2["🗺️ Map Integration\nGoogle Maps API"]
        P3["📱 Push Notifications\nFCM"]
        P4["📊 Admin Dashboard\nAnalytics & Stats"]
        P5["🔍 Advanced Search\nBlood type + location filter"]
        P6["📧 Email Templates\nHTML email designs"]
    end

    subgraph R["🟣 v3.0 — Roadmap"]
        R1["📱 Mobile App\nReact Native"]
        R2["🤖 AI Donor Matching\nML-powered suggestions"]
        R3["⛓️ Blockchain Records\nImmutable donation history"]
        R4["🌍 Multilanguage\ni18n support"]
        R5["🏆 Gamification\nLeaderboards & badges"]
    end
```

---

## 🤝 Contributing

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/your-username/bloodconnection.git

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes & commit
git add .
git commit -m "feat: add your feature description"

# 5. Push your branch
git push origin feature/your-feature-name

# 6. Open a Pull Request on GitHub
```

**Commit Message Convention:**

| Prefix | Use for |
|--------|---------|
| `feat:` | New features |
| `fix:` | Bug fixes |
| `docs:` | Documentation only |
| `style:` | Formatting changes |
| `refactor:` | Code restructuring |
| `test:` | Adding/fixing tests |

---

## 📄 License

```
MIT License — Copyright (c) 2024 BloodConnection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files, to deal in the Software
without restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do so.
```

---

<div align="center">

---

**🩸 BloodConnection**

*Built with ❤️ to connect donors with those in need.*

*Every connection made here could save a life.*

---

[![Stars](https://img.shields.io/github/stars/your-username/bloodconnection?style=social)](https://github.com/your-username/bloodconnection)
[![Forks](https://img.shields.io/github/forks/your-username/bloodconnection?style=social)](https://github.com/your-username/bloodconnection)
[![Issues](https://img.shields.io/github/issues/your-username/bloodconnection?style=social)](https://github.com/your-username/bloodconnection/issues)

*Connecting Lives. Saving Futures.* 🩸

</div>
