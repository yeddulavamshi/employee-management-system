# 🚀 Employee Management System (Full Stack)

![Java](https://img.shields.io/badge/Java-21-orange)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-green)
![React](https://img.shields.io/badge/React-18-blue)
![MySQL](https://img.shields.io/badge/MySQL-Aiven_Cloud-blue)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)
![Status](https://img.shields.io/badge/Deployment-Live-success)

A robust, full-stack web application designed to streamline employee data management. Built with a **Spring Boot** backend and a **React (Vite)** frontend, this system features secure REST APIs, a cloud-hosted MySQL database, and automated deployment pipelines via Render and Vercel.

---

## 🌐 Live Demo

| Component | Status | Link |
| :--- | :--- | :--- |
| **Frontend (UI)** | 🟢 Live | [**Click to View App**](https://employee-management-system-two-rho.vercel.app) |
| **Backend (API)** | 🟢 Live | [View API Health](https://employee-management-system-orwg.onrender.com/api/employees) |

---

## 📸 Screenshots

| **Employee List** | **Add Employee** |
|:---:|:---:|
| ![List Page](./screenshots/list-page.png) | ![Add Page](./screenshots/add-page.png) |

---

## 🛠️ Tech Stack

### **Backend**
* **Framework:** Spring Boot (Java 21)
* **Database:** MySQL (Hosted on Aiven Cloud)
* **Build Tool:** Maven
* **Containerization:** Docker (Multi-stage build)
* **Deployment:** Render

### **Frontend**
* **Library:** React.js (Vite)
* **Styling:** Bootstrap / CSS
* **HTTP Client:** Axios
* **Deployment:** Vercel

---

## ✨ Key Features
* **Full CRUD Operations:** Create, Read, Update, and Delete employee records.
* **RESTful API Architecture:** Clean and scalable backend API endpoints.
* **Cloud Database Integration:** Data persists securely in a remote MySQL database.
* **Cross-Origin Resource Sharing (CORS):** Secure communication between the React frontend and Spring Boot backend.
* **Dockerized Deployment:** Backend is containerized using Docker for consistent runtime environments.

---

## 🏗️ Architecture Flow

```mermaid
graph LR
A[User (Browser)] -- HTTP Requests --> B[React Frontend (Vercel)]
B -- REST API Calls --> C[Spring Boot Backend (Render)]
C -- JDBC --> D[MySQL Database (Aiven)]
