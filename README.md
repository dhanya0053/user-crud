# 👥 User CRUD App (Node.js + Express + PostgreSQL)

This is a simple CRUD web app to manage users using Node.js, Express, and PostgreSQL.

## ✨ Features
- Add new users
- View all users
- Delete users

## 🛠 Tech Stack
- Node.js
- Express.js
- PostgreSQL
- HTML, CSS, JavaScript (Fetch API)

## 🚀 How to Run

1. Clone the repo
2. Install dependencies: `npm install`
3. Set up `.env` with your PostgreSQL credentials
4. Start the server: `node server.js`
5. Visit: `http://localhost:3000`

## 🧪 Database Schema

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);
![image](https://github.com/user-attachments/assets/7901dd9c-d097-40f7-a8a2-52261b221cb5)
![image](https://github.com/user-attachments/assets/6041622b-a071-4b7b-ab0a-f2eaefaf676d)

