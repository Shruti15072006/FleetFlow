
# 🚛 FleetFlow - Complete Fleet Management System

<div align="center">

![FleetFlow Logo](https://img.shields.io/badge/FleetFlow-v1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![Node](https://img.shields.io/badge/Node-18.x-339933)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479a1)
![License](https://img.shields.io/badge/License-MIT-green)

**A complete fleet management solution with real-time tracking, maintenance scheduling, and intelligent trip validation**

[Features](#features) • [Tech Stack](#tech-stack) • [Installation](#installation) • [API Documentation](#api-documentation) • [Team](#team)

</div>

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation Guide](#installation-guide)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Validation Rules](#validation-rules)
- [Testing](#testing)
- [Team](#team)
- [License](#license)

---

## 🎯 Overview

**FleetFlow** is a comprehensive fleet management system designed to optimize vehicle operations, track maintenance schedules, and manage trip assignments with intelligent validation. The system ensures operational efficiency through real-time monitoring and automated business rule enforcement.

### Key Highlights
- ✅ **Real-time fleet tracking** - Monitor vehicle status instantly
- ✅ **Smart trip validation** - Prevent overloading and license expiry issues
- ✅ **Automated maintenance** - Vehicles auto-blocked when in shop
- ✅ **Live dashboard** - KPIs and analytics at your fingertips
- ✅ **RESTful API** - Clean, documented endpoints

---

## ✨ Features

### 🚗 Vehicle Management
- Add, edit, delete vehicles
- Track capacity and status
- Real-time availability checking
- Vehicle history tracking

### 👨‍✈️ Driver Management
- Driver profiles with license tracking
- License expiry alerts
- Availability status
- Trip history

### 🚚 Trip Management ⭐ (Judge Favorite)
- **Intelligent trip creation** with validation:
  - Cargo weight vs vehicle capacity check
  - Driver license expiry validation
  - Vehicle availability verification
  - Driver availability verification
  - Duplicate trip prevention
- Trip completion with auto status updates
- Real-time trip tracking

### 🔧 Maintenance Management
- Schedule maintenance tasks
- **Auto vehicle blocking** when in shop
- Cost tracking
- Maintenance history
- Complete maintenance with vehicle reactivation

### 📊 Dashboard & Analytics
- Real-time KPIs
- Fleet utilization metrics
- Pending trips counter
- Vehicles in shop monitor
- Active driver count
- Utilization rate calculation

### 🎨 Modern UI/UX
- Responsive design
- Interactive tables with search
- Status badges with colors
- Modal forms for data entry
- Real-time updates
- Professional gradient design

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI Library |
| React Router | 6.20.1 | Navigation |
| Axios | 1.6.2 | API Calls |
| Tailwind CSS | 3.3.6 | Styling |
| Headless UI | 1.7.17 | UI Components |
| Heroicons | 2.0.18 | Icons |
| Vite | 5.0.8 | Build Tool |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 18.x | Runtime |
| Express | 4.18.2 | Web Framework |
| MySQL | 8.0 | Database |
| Sequelize | 6.31.0 | ORM |
| CORS | 2.8.5 | Cross-Origin Resource Sharing |
| Dotenv | 16.0.3 | Environment Variables |

---

## 📁 Project Structure

```
fleetflow-mvp/
├── client/                    # Frontend React Application
│   ├── public/                # Static files
│   │   └── index.html         # Main HTML file
│   ├── src/
│   │   ├── api/               # API integration
│   │   │   └── axios.js       # Axios configuration
│   │   ├── components/        # Reusable components
│   │   │   ├── Navbar.jsx     # Navigation bar
│   │   │   ├── DataTable.jsx  # Reusable table
│   │   │   └── StatusPill.jsx # Status badge
│   │   ├── pages/             # Page components
│   │   │   ├── Dashboard.jsx  # Main dashboard
│   │   │   ├── Vehicles.jsx   # Vehicle management
│   │   │   ├── Drivers.jsx    # Driver management
│   │   │   ├── Trips.jsx      # Trip management ⭐
│   │   │   └── Maintenance.jsx # Maintenance management
│   │   ├── App.jsx            # Main app component
│   │   ├── main.jsx           # Entry point
│   │   └── index.css          # Global styles
│   ├── package.json           # Frontend dependencies
│   └── vite.config.js         # Vite configuration
│
├── server/                    # Backend Node.js Application
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── models/
│   │   ├── index.js           # Model associations
│   │   ├── Vehicle.js         # Vehicle model
│   │   ├── Driver.js          # Driver model
│   │   ├── Trip.js            # Trip model ⭐
│   │   ├── Maintenance.js     # Maintenance model
│   │   └── Expense.js         # Expense model
│   ├── controllers/
│   │   ├── vehicle.controller.js
│   │   ├── driver.controller.js
│   │   ├── trip.controller.js  ⭐ (with validation)
│   │   ├── maintenance.controller.js
│   │   └── dashboard.controller.js
│   ├── routes/
│   │   ├── vehicle.routes.js
│   │   ├── driver.routes.js
│   │   ├── trip.routes.js
│   │   ├── maintenance.routes.js
│   │   └── dashboard.routes.js
│   ├── app.js                 # Express app setup
│   ├── server.js              # Server entry point
│   ├── package.json           # Backend dependencies
│   └── .env                   # Environment variables
│
├── demo.html                   # Standalone demo page
├── README.md                   # Project documentation
└── .gitignore                  # Git ignore rules
```

---

## 📦 Installation Guide

### Prerequisites
- Node.js (v18 or higher)
- MySQL (v8.0 or higher)
- Git
- npm or yarn

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/fleetflow-mvp.git
cd fleetflow-mvp
```

### Step 2: Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your database credentials
```

**.env Configuration:**
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=fleetflow
```

### Step 3: Database Setup

```bash
# Login to MySQL
mysql -u root -p

# Create database
CREATE DATABASE fleetflow;
EXIT;
```

### Step 4: Frontend Setup

```bash
# Navigate to client directory
cd ../client

# Install dependencies
npm install
```

---

## 🚀 Running the Application

### Start Backend Server
```bash
# From project root
cd server
npm run dev
```
Server will run at `http://localhost:5000`

### Start Frontend Development Server
```bash
# From project root
cd client
npm run dev
```
Frontend will run at `http://localhost:5173`

### Access the Application
- Open browser and go to `http://localhost:5173`
- Backend API available at `http://localhost:5000`

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Vehicle Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/vehicles` | Get all vehicles | - |
| GET | `/vehicles/:id` | Get vehicle by ID | - |
| POST | `/vehicles` | Create vehicle | `{ "name": "Truck A", "capacity": 5000 }` |
| PATCH | `/vehicles/:id` | Update vehicle | `{ "status": "available" }` |

### Driver Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/drivers` | Get all drivers | - |
| GET | `/drivers/:id` | Get driver by ID | - |
| POST | `/drivers` | Create driver | `{ "name": "John", "licenseNumber": "DL001", "licenseExpiry": "2025-12-31" }` |
| PATCH | `/drivers/:id` | Update driver | `{ "status": "available" }` |

### Trip Endpoints ⭐

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/trips` | Get all trips | - |
| GET | `/trips/:id` | Get trip by ID | - |
| POST | `/trips/create` | Create trip | `{ "origin": "A", "destination": "B", "cargoWeight": 3000, "vehicleId": 1, "driverId": 1 }` |
| PATCH | `/trips/:id/complete` | Complete trip | - |

### Maintenance Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/maintenance` | Get all maintenance | - |
| POST | `/maintenance/create` | Create maintenance | `{ "vehicleId": 1, "description": "Oil Change", "cost": 350 }` |
| PATCH | `/maintenance/:id/complete` | Complete maintenance | - |

### Dashboard Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/dashboard/kpis` | Get dashboard KPIs |

---

## 💾 Database Schema

### Vehicles Table
```sql
CREATE TABLE Vehicles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  capacity INT NOT NULL,
  status ENUM('available', 'in_trip', 'in_shop') DEFAULT 'available',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Drivers Table
```sql
CREATE TABLE Drivers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  licenseNumber VARCHAR(100) NOT NULL,
  licenseExpiry DATE NOT NULL,
  status ENUM('available', 'on_trip') DEFAULT 'available',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Trips Table
```sql
CREATE TABLE Trips (
  id INT PRIMARY KEY AUTO_INCREMENT,
  origin VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  cargoWeight INT NOT NULL,
  vehicleId INT NOT NULL,
  driverId INT NOT NULL,
  status ENUM('in_progress', 'completed') DEFAULT 'in_progress',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (vehicleId) REFERENCES Vehicles(id),
  FOREIGN KEY (driverId) REFERENCES Drivers(id)
);
```

### Maintenance Table
```sql
CREATE TABLE Maintenances (
  id INT PRIMARY KEY AUTO_INCREMENT,
  vehicleId INT NOT NULL,
  description TEXT NOT NULL,
  cost FLOAT NOT NULL,
  status ENUM('scheduled', 'in_progress', 'completed') DEFAULT 'scheduled',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (vehicleId) REFERENCES Vehicles(id)
);
```

---

## ✅ Validation Rules

### Trip Creation Validation ⭐

| Validation | Description | Error Message |
|------------|-------------|---------------|
| Cargo Capacity | Cargo weight ≤ vehicle capacity | `"Cargo weight Xkg exceeds capacity Ykg"` |
| Vehicle Availability | Vehicle status must be 'available' | `"Vehicle is not available"` |
| Driver Availability | Driver status must be 'available' | `"Driver is not available"` |
| License Expiry | License expiry date ≥ today | `"Driver license expired"` |
| Duplicate Trip | No active trip for vehicle | `"Vehicle already in trip"` |

### Maintenance Logic
- When maintenance created → `vehicle.status = 'in_shop'`
- When maintenance completed → `vehicle.status = 'available'`
- Vehicles in shop cannot be assigned trips

---

## 🧪 Testing

### Test Backend APIs with Curl

```bash
# Test connection
curl http://localhost:5000/health

# Create vehicle
curl -X POST http://localhost:5000/api/vehicles \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Truck","capacity":5000}'

# Create trip with validation
curl -X POST http://localhost:5000/api/trips/create \
  -H "Content-Type: application/json" \
  -d '{"origin":"A","destination":"B","cargoWeight":3000,"vehicleId":1,"driverId":1}'

# Get dashboard KPIs
curl http://localhost:5000/api/dashboard/kpis
```

---

## 👥 Team FleetFlow

<div align="center">
  
### Meet Our Team

| Role | Name | Responsibilities | Key Contributions |
|------|------|------------------|-------------------|
| **🚀 Documentation** | **Ishan ** | Project coordination, Documentation, Git management, Demo presentation | ✅ README, ✅ API docs, ✅ Presentation |
| **💻 Backend Developer** | **Shruti** | API Development, Database, Trip Validation ⭐, Server Architecture | ✅ 20+ endpoints, ✅ Trip validation, ✅ Database design |
| **🤖 AI/ML Support** | **Aikya** | Route optimization, Predictive maintenance, Data analysis, ML research | ✅ ML models, ✅ Route algorithms, ✅ Analytics |
| **🎨 Frontend Developer** | **Aena** | UI/UX Design, React components, API integration, Responsive design | ✅ Dashboard UI, ✅ Components, ✅ API integration |

</div>

### Detailed Contributions

#### 🚀 ISHAN-  Documentation Specialist
- Set up GitHub repository with proper branch strategy (main, backend, frontend)
- Created comprehensive project documentation and README
- Managed team workflow and daily standups
- Prepared demo presentation script and slides
- Coordinated final integration and deployment
- Ensured all deliverables met hackathon requirements

#### 💻 Shruti - Backend Developer
- Built complete REST API with 20+ endpoints using Express and Sequelize
- Implemented intelligent trip validation logic (cargo capacity, license expiry, availability)
- Designed MySQL database schema with proper relationships and foreign keys
- Created maintenance auto-blocking system (vehicle status updates automatically)
- Developed real-time dashboard KPIs with complex SQL queries
- Tested all endpoints with edge cases and error handling

#### 🤖 AIKYA - AI/ML Support & Research
- Researched and implemented route optimization algorithms
- Developed predictive maintenance models using historical data
- Analyzed fleet utilization patterns for efficiency improvements
- Suggested ML-based enhancements for future versions
- Provided data-driven insights for optimal fleet management
- Created analytics reports for decision making

#### 🎨 AENA - Frontend Developer
- Created responsive React components with modern UI/UX design
- Implemented beautiful dashboard with Tailwind CSS
- Integrated all 20+ backend APIs using Axios
- Built interactive data tables with search and pagination
- Added real-time data updates and loading states
- Designed modal forms for all CRUD operations
- Ensured mobile-responsive design throughout

### Our Workflow

```
Daily Standup (9:00 AM) → Feature Development → Code Review → Integration → Testing → Deployment
```

### Tools We Used

| Tool | Purpose | Team Members |
|------|---------|--------------|
| GitHub | Version control & collaboration | Aena and Shruti |
| VS Code | Development environment | All |
| Discord | Team communication | Shruti |
| Thunder Client | API testing | Shruti, Aena |
|

### Project Timeline

| Phase | Duration | Lead | Status |
|-------|----------|------|--------|
| Planning & Setup  |Ishan| ✅ Complete |
| Backend Development | Shruti | ✅ Complete |
| AI/ML Research|Aikya | ✅ Complete |
| Frontend Development | Aena | ✅ Complete |
| Integration & Testing  | All | ✅ Complete |
| Documentation | Ishan | ✅ Complete |
| Demo Preparation | All | ✅ Complete |

### Key Achievements

| Achievement | Lead | Impact |
|-------------|------|--------|
| Complete working MVP | ALL| Project delivery |
| Intelligent trip validation ⭐ | Shruti | Judge favorite feature |
| Modern responsive UI | Aena | User experience |
| ML-powered insights | Aikya| Future scalability |
| Professional documentation | Ishan | Project clarity |

---

## 🙏 Acknowledgments

- **Hackathon Organizers** - For this amazing opportunity
- **Judges** - For their valuable time and feedback
- **Mentors** - For guidance throughout the event
- **Open Source Community** - For the amazing tools and libraries

---

## 📝 License

This project is created for hackathon purposes. All rights reserved.

---

<div align="center">

## 🏆 Thank You!

**Team FleetFlow** would like to thank the judges, organizers, and everyone who made this hackathon possible!

| Shruti | Ishan | Aikya | Aena |
|:------:|:----:|:-----:|:---:|
| Backend | Documentation | AI/ML | Frontend |

**Made with ❤️ during Hackathon 2026**

[🔝 Back to Top](#-fleetflow---complete-fleet-management-system)

</div>
```

---

