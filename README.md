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

This document focuses on the **user stories** that define the main features and **requirements specification**.

---

## 2. Agile SDM Requirements Specification

### 2.1. Project Goals

- **Goal 1:** Allow users to **create, track, and manage their financial data** (expenses and incomes).
- **Goal 2:** Provide users with **insightful visualizations** to track their spending and earnings over different time periods.
- **Goal 3:** Enable **secure login/authentication** with session management and data security.
- **Goal 4:** Implement **user-defined categorization** of expenses and incomes to enable detailed analysis.
- **Goal 5:** Support **responsive design**, ensuring the app works on mobile, tablet, and desktop devices.

### 2.2. Scope

The application will include the following features:
- **Authentication:** Sign-up, login, and logout functionality.
- **CRUD Operations:** Users can add, edit, and delete expenses and incomes.
- **Category Management:** Users can create and assign categories to their transactions.
- **Visualization:** Provide charts/graphs for transaction history.
- **Time Ranges:** Support time-based filters (Last 30 Days, Last 60 Days, All-time history).
- **Profile Management:** Ability to upload and update profile pictures.

### 2.3. User Stories with Acceptance Criteria (Gherkin Format)

---

### 3.1. Sign Up (Registration)

**US-001 – Create Account**  
- **Description**: As a new user, I want to sign up with my name, email, and password so that I can create a personal account and access the app securely.  

**Acceptance Criteria**:

Given I am a new user,
When I enter my name, email, and password,
Then I should be able to successfully sign up and create an account.

**US-002 – Unique Account (Email Uniqueness)**  
- **Description**: As a new user, I want the system to prevent duplicate signups with the same email so that each account is unique and secure.

**Acceptance Criteria**:

Given I have already signed up with an email,
When I try to sign up with the same email again,
Then I should see an error message stating "Email already in use".


**US-004 – Upload Profile Picture During Sign Up**  
- **Description**: As a new user, I want to upload a profile picture while signing up so that my account feels personalized.

**Acceptance Criteria**:

Given I am on the sign-up page,
When I select and upload a profile picture,
Then the profile picture should be visible on my profile.


---

### 3.2. Log In (Authentication)

**US-006 – Log In with Credentials**  
- **Description**: As a registered user, I want to log in using my email and password so that I can access my dashboard and financial data.

**Acceptance Criteria**:

Given I have a registered account,
When I enter my correct email and password,
Then I should be logged in and directed to my dashboard.


**US-007 – Invalid Login Handling**  
- **Description**: As a registered user, I want to see a clear error message if my credentials are incorrect so that I can correct them.

**Acceptance Criteria**:

Given I am on the login page,
When I enter an incorrect email or password,
Then I should see an error message saying "Invalid credentials".


---

### 3.3. Adding Expenses & Incomes

**US-010 – Add Expense**  
- **Description**: As a logged-in user, I want to add an expense with fields such as amount, date, category, and description so that I can track my spending over time.

**Acceptance Criteria**:

Given I am logged in,
When I add an expense with valid data (amount, date, category, description),
Then the expense should be added to my transaction history.


**US-011 – Add Income**  
- **Description**: As a logged-in user, I want to add an income entry with fields such as amount, date, category, and source/description so that I can track my earnings.

**Acceptance Criteria**:

Given I am logged in,
When I add an income with valid data (amount, date, category, description),
Then the income should be added to my transaction history.


---

### 3.4. Categorizing Expenses and Incomes

**US-014 – Custom Categories**  
- **Description**: As a logged-in user, I want to create my own categories for expenses and incomes so that the tracking reflects my personal spending and earning patterns.

**Acceptance Criteria**:

Given I am logged in,
When I create a custom category for transactions,
Then the new category should be available for selection when adding expenses or incomes.


---

### 3.5. Dashboard & Visualizations

**US-017 – Main Dashboard Overview**  
- **Description**: As a logged-in user, I want to see a dashboard summary with total income, total expenses, and balance so that I can get an overview of my financial status.

**Acceptance Criteria**:

Given I am logged in,
When I visit the dashboard,
Then I should see my total income, total expenses, and balance on the dashboard.


**US-018 – Chart Visualization**  
- **Description**: As a logged-in user, I want to see visual charts/graphs of my expenses and incomes so that I can understand trends over time.

**Acceptance Criteria**:

Given I am logged in,
When I visit the dashboard,
Then I should see charts that visually represent my expenses and incomes over time (last 30 days, last 60 days, all-time).


---

### 3.6. Time-Range Views

**US-020 – Last 30 Days View**  
- **Description**: As a logged-in user, I want to view only transactions from the last 30 days so that I can focus on my recent financial behavior.

**Acceptance Criteria**:

Given I am logged in,
When I filter my transactions to the last 30 days,
Then I should only see transactions from the past 30 days.


**US-021 – Last 60 Days View**  
- **Description**: As a logged-in user, I want to view only transactions from the last 60 days so that I can analyze my short-term trends.

**Acceptance Criteria**:

Given I am logged in,
When I filter my transactions to the last 60 days,
Then I should only see transactions from the past 60 days.


---

### 3.7. Profile & UI Personalization

**US-024 – Display Profile Picture**  
- **Description**: As a logged-in user, I want my uploaded profile picture to show in the header or profile section so that the app feels personalized.

**Acceptance Criteria**:

Given I am logged in,
When I visit my profile page,
Then my profile picture should be visible at the top of the page.


---

## 4. Non-Functional User Stories (High Level)

**US-NF-001 – Security**  
- **Description**: As a user, I want my password to be stored securely so that my account is protected in case of a data breach.

**Acceptance Criteria**:

Given I am a user,
When I sign up or log in,
Then my password should be securely hashed in the database and not stored as plain text.

**US-NF-002 – Performance**  
- **Description**: As a user, I want the dashboard and visualizations to load quickly so that I can access my financial information without long waiting times.

**Acceptance Criteria**:

Given I am a user,
When I visit the dashboard,
Then the page should load in under 3 seconds.


---

## 5. Diagram

Below is a **system architecture diagram** that shows how the frontend, backend, and database interact:

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
               ├──────────────────────────────────────────┤
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

# 6. Summary

This document defines the requirements specification and user stories for the MERN full-stack Expense Tracker application. It includes acceptance criteria written in Gherkin syntax, aligning with Agile SDM principles. The document can be used for:

Defining and refining the user stories with clear acceptance criteria.

Planning API routes, backend models, and frontend components.

Supporting testing (unit tests, integration tests, E2E).

Structuring your project documentation for easy reference and iteration.

This approach ensures that the project can be built incrementally and flexibly, accommodating changes and user feedback throughout the development process.
