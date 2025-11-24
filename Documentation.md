# Expense Tracker – Documentation

## 1. Project Overview

This is a MERN (MongoDB, Express.js, React, Node.js) full-stack **expense & income tracking** application.  
Users can:

- Create an account with a **profile picture**
- **Log in** securely
- Add **expenses** and **incomes**
- Categorize their own transactions
- View a **dashboard** with visualizations for:
  - **Last 30 days**
  - **Last 60 days**
  - **All-time history**

This document focuses on the **user stories** that define the main features.

---

## 2. User Roles

- **Registered User**
  - Can sign up, log in, and manage their own financial data.
  - Can upload a profile picture during sign up.
  - Can add, edit, and categorize expenses and incomes.
  - Can view personal dashboards and visualizations.

*(No admin role is defined for now.)*

## Diagram

                           ┌───────────────────────────┐
                           │         USER              │
                           │  • Signs up               │
                           │  • Logs in                │
                           │  • Adds expenses/incomes  │
                           │  • Views dashboard        │
                           └───────────┬──────────────┘
                                       │
                                       ▼
                        ┌───────────────────────────┐
                        │        FRONTEND           │
                        │        (React + Vite)     │
                        ├───────────────────────────┤
                        │ Pages:                    │
                        │  • Signup                 │
                        │  • Login                  │
                        │  • Dashboard              │
                        │  • Add Expense/Income     │
                        ├───────────────────────────┤
                        │ Context / Hooks:          │
                        │  • AuthContext            │
                        │  • ExpenseContext         │
                        │  • API hooks (useFetch...)│
                        ├───────────────────────────┤
                        │ Components:               │
                        │  • Charts (30/60/all)     │
                        │  • Cards                   │
                        │  • Inputs & Forms         │
                        │  • Layouts                │
                        └───────────┬──────────────┘
                                    │  Axios Fetch
                                    ▼  with JWT token
                    ┌──────────────────────────────────────────┐
                    │               BACKEND                    │
                    │    (Node.js + Express.js API)            │
                    ├──────────────────────────────────────────┤
                    │ Routes (/api):                           │
                    │   /auth/register                         │
                    │   /auth/login                            │
                    │   /transactions (protected)              │
                    │   /profile (protected)                   │
                    ├──────────────────────────────────────────┤
                    │ Middleware:                              │
                    │   • protect (checks JWT token)           │
                    │   • upload (profile picture)             │
                    │   • validation middlewares               │
                    ├──────────────────────────────────────────┤
                    │ Controllers:                             │
                    │   • registerUser                         │
                    │   • loginUser                            │
                    │   • addExpense / addIncome               │
                    │   • getHistory (30d, 60d, all)           │
                    ├──────────────────────────────────────────┤
                    │ Models (Mongoose):                       │
                    │   • User                                 │
                    │   • Transaction                          │
                    └───────────┬─────────────────────────────┘
                                │  Mongoose Queries
                                ▼
                   ┌───────────────────────────────────────────┐
                   │                  DATABASE                  │
                   │                 MongoDB                    │
                   ├───────────────────────────────────────────┤
                   │ Collections:                               │
                   │   users:                                   │
                   │     - name                                 │
                   │     - email                                │
                   │     - password (hashed)                    │
                   │     - profilePic (uploads/)                │
                   │                                             │
                   │   transactions:                             │
                   │     - amount                               │
                   │     - type (expense/income)               │
                   │     - category                             │
                   │     - createdAt                            │
                   │     - userId (ref User)                    │
                   └───────────────────────────────────────────┘

---

## 3. User Stories

### 3.1. Sign Up (Registration)

**US-001 – Create Account**

- As a **new user**  
  I want to **sign up with my name, email, and password**  
  So that I can **create a personal account** and access the app securely.

**US-002 – Unique Account (Email Uniqueness)**

- As a **new user**  
  I want the system to **prevent duplicate signups with the same email**  
  So that each account is **unique and secure**.

**US-003 – Password Validation**

- As a **new user**  
  I want the system to **validate my password strength** (e.g., minimum length)  
  So that my account is **protected** from simple attacks.

**US-004 – Upload Profile Picture During Sign Up**

- As a **new user**  
  I want to **upload a profile picture while signing up**  
  So that my account feels **personalized** and **recognizable** in the UI.

**US-005 – Feedback on Invalid Sign Up**

- As a **new user**  
  I want to **see clear error messages** if any sign-up data is invalid  
  So that I understand **what to fix** and can successfully create an account.

---

### 3.2. Log In (Authentication)

**US-006 – Log In with Credentials**

- As a **registered user**  
  I want to **log in using my email and password**  
  So that I can **access my dashboard and financial data**.

**US-007 – Invalid Login Handling**

- As a **registered user**  
  I want to **see a clear error message if my credentials are incorrect**  
  So that I know whether it’s a **wrong password** or **non-existing account**.

**US-008 – Session Handling / Persistent Login**

- As a **logged-in user**  
  I want the app to **remember me for a period of time** (e.g., using tokens/local storage)  
  So that I don’t have to **log in every time** I refresh the page.

**US-009 – Logout**

- As a **logged-in user**  
  I want to **log out** of my account  
  So that **no one else can access my data** from my device.

---

### 3.3. Adding Expenses & Incomes

**US-010 – Add Expense**

- As a **logged-in user**  
  I want to **add an expense** with fields such as **amount, date, category, and description**  
  So that I can **track my spending** over time.

**US-011 – Add Income**

- As a **logged-in user**  
  I want to **add an income entry** with fields such as **amount, date, category, and source/description**  
  So that I can **track my earnings**.

**US-012 – Edit & Delete Transactions**

- As a **logged-in user**  
  I want to be able to **edit or delete** any of my existing **expense or income entries**  
  So that I can **correct mistakes** or **remove outdated data**.

**US-013 – Basic Validation on Transactions**

- As a **logged-in user**  
  I want the system to **validate transaction fields** (e.g., amount is a positive number, date is valid)  
  So that my financial records are **accurate and consistent**.

---

### 3.4. Categorizing Expenses and Incomes

**US-014 – Custom Categories**

- As a **logged-in user**  
  I want to **create my own categories for expenses and incomes**  
  So that the tracking reflects **my personal spending and earning patterns**.

**US-015 – Assign Category to Transaction**

- As a **logged-in user**  
  I want to **assign a category** to each expense or income  
  So that I can **analyze my finances by category**.

**US-016 – View Transactions by Category**

- As a **logged-in user**  
  I want to **filter or group my transactions** by category  
  So that I can see **where most of my money is going** and **coming from**.

---

### 3.5. Dashboard & Visualizations

**US-017 – Main Dashboard Overview**

- As a **logged-in user**  
  I want to see a **dashboard summary** (e.g., total income, total expenses, balance)  
  So that I can quickly get an **overview of my financial status**.

**US-018 – Chart Visualization**

- As a **logged-in user**  
  I want to see **visual charts/graphs** (e.g., bar or line charts) of my expenses and incomes  
  So that I can **understand trends** over time at a glance.

**US-019 – Category-Based Visualization**

- As a **logged-in user**  
  I want to see **visualizations grouped by category**  
  So that I know **which categories contribute most to my spending or income**.

---

### 3.6. Time-Range Views (Last 30 Days, Last 60 Days, All-Time)

**US-020 – Last 30 Days View**

- As a **logged-in user**  
  I want to view **only transactions from the last 30 days**  
  So that I can focus on my **recent financial behavior**.

**US-021 – Last 60 Days View**

- As a **logged-in user**  
  I want to view **only transactions from the last 60 days**  
  So that I can analyze my **short-term trends over the past two months**.

**US-022 – All-Time History**

- As a **logged-in user**  
  I want to view **all transactions since I started using the app**  
  So that I can see my **long-term financial history**.

**US-023 – Switch Between Time Ranges**

- As a **logged-in user**  
  I want a simple way to **switch between “Last 30 days”, “Last 60 days”, and “All-time”** on the dashboard  
  So that I can **compare different periods easily**.

---

### 3.7. Profile & UI Personalization

**US-024 – Display Profile Picture**

- As a **logged-in user**  
  I want my **uploaded profile picture** to show in the header or profile section  
  So that the app feels **personal and recognizable**.

**US-025 – View and Update Profile Info (Optional, if implemented)**

- As a **logged-in user**  
  I want to **view and update my basic profile info** (e.g., name, profile picture)  
  So that I can **keep my account details up to date**.

---

## 4. Non-Functional User Stories (High Level)

**US-NF-001 – Security**

- As a **user**  
  I want my **password to be stored securely** (e.g., hashed)  
  So that my account is **protected** in case of a data breach.

**US-NF-002 – Performance**

- As a **user**  
  I want the dashboard and visualizations to **load quickly**  
  So that I can access my financial information **without long waiting times**.

**US-NF-003 – Responsiveness**

- As a **user**  
  I want the app to be **usable on mobile, tablet, and desktop**  
  So that I can track my finances from **any device**.

---

## 5. Summary

This document defines the main **user stories** for the MERN full-stack Expense Tracker application, covering:

- **Authentication:** Sign up, log in, logout with profile picture.
- **Core CRUD:** Adding, editing, and deleting expenses and incomes.
- **Categorization:** User-defined categories for transactions.
- **Visualization:** Dashboard with charts.
- **Time Ranges:** Views for **last 30 days**, **last 60 days**, and **all-time** history.

These user stories can be used directly for:
- Planning your **MERN API routes and models**
- Designing your **React components & pages**
- Writing **test cases** (unit, integration, E2E)
- Structuring your **project report / documentation**
