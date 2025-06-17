# BudgetBuddy
Expence Tracker app
# MERN 

A modern, full-stack Expense Tracker App built using the MERN (MongoDB, Express, React, Node.js) stack. This application features secure user authentication with JWT, income and expense tracking, interactive charts for data visualization, and the ability to export records to Excel. The UI is fully responsive and intuitive for seamless use across devices.

---

## 🚀 Project Overview

- **Full-stack MERN application** for personal finance management.
- **User authentication** with JWT to ensure data privacy.
- **Track and categorize** income and expenses.
- **Interactive charts** (Bar, Pie, Line) to visualize financial data.
- **Export data** to Excel (.xlsx) for offline analysis.
- **Responsive design** for desktop, tablet, and mobile.

---

## 📋 Functional Requirements

### 1. User Authentication
- Secure sign-up and login using JWT-based authentication.
- Protect routes so only authenticated users can access dashboard and data.

### 2. Dashboard Overview
- Display summary cards for Total Balance, Total Income, and Total Expenses.
- Show recent transactions for quick access.

### 3. Income & Expense Management
- Add, view, and delete income sources and expenses.
- Categorize expenses for better tracking.
- List all transactions with filtering options.

### 4. Interactive Charts
- Integrate Bar, Pie, and Line charts to visualize income and expenses over time and by category.
- Use a charting library like Chart.js or Recharts.

### 5. Reports & Data Export
- Enable users to export all income and expense data as an Excel (.xlsx) file.
- Use a library like SheetJS (xlsx) for backend or frontend export.

### 6. Responsive Design
- Ensure the UI is fully responsive and mobile-first.
- Use a modern UI library (Material-UI, Ant Design, or Tailwind CSS).

### 7. Navigation & UX
- Sidebar with navigation links: Dashboard, Income, Expenses, Reports, Logout.
- Show delete buttons on hover over income/expense cards for easy deletion.

---

## 🛠 Technical Requirements

| Layer      | Technology                                  |
|------------|---------------------------------------------|
| Frontend   | React.js (with hooks, Context API or Redux) |
| Backend    | Node.js, Express.js (RESTful API)           |
| Database   | MongoDB (Mongoose ODM)                      |
| Auth       | JWT (JSON Web Token)                        |
| Charts     | Chart.js, Recharts, or similar              |
| Excel      | SheetJS (xlsx)                              |
| Styling    | Material-UI, Ant Design, or Tailwind CSS    |
| Responsive | Mobile-first design, media queries          |
| Versioning | Git & GitHub                                |

---

## 📦 Getting Started

### Prerequisites

- Node.js & npm
- MongoDB instance (local or cloud)
- Git

### Installation

1. **Clone the repository:**
    ```
    git clone https://github.com/your-username/mern-expense-tracker.git
    cd mern-expense-tracker
    ```

2. **Backend Setup:**
    ```
    cd backend
    npm install
    # Create a .env file with your MongoDB URI and JWT secret
    npm start
    ```

3. **Frontend Setup:**
    ```
    cd frontend
    npm install
    npm start
    ```

---

## 📚 Folder Structure

