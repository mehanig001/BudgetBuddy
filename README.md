# Expense Tracker App (MERN Stack)

A fully responsive personal finance management application built with the MERN stack (MongoDB, Express, React, Node.js). This project enables users to securely track income and expenses, visualize financial data with interactive charts, and export records to Excel for offline analysis. Designed and developed end-to-end as a personal project to deepen expertise in modern web application architecture.

---

## Demo

> **Live Demo:** [[Click Here](https://budget-buddy-three-chi.vercel.app/)]

---

## Features

- Secure user authentication with JWT
- Add, view, and delete income and expense transactions
- Categorize transactions and filter by category
- Dashboard overview with real-time balance, income, and expense summaries
- Interactive data visualization using Bar, Pie, and Line charts
- Export all financial data to Excel (.xlsx) format
- Fully responsive UI for desktop, tablet, and mobile
- Modern sidebar navigation and intuitive user experience

---

## Tech Stack

- **Frontend:** React.js, Context API (or Redux), Chart.js/Recharts, Material-UI/Tailwind CSS
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token) [1]
- **Data Export:** SheetJS (xlsx)
- **Other:** Helmet, Morgan, CORS

---

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or cloud)
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

## Author

Developed by Gautam Mehani.  
For questions or feedback, feel free to reach out via [gautammehani@gmail.com].

---

## License

This project is licensed under the MIT License.
