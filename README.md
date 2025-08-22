# Tutedude Todo App (MongoDB)

A simple and modern Todo List web application built with **Node.js**, **Express**, **MongoDB (Atlas)**, and **EJS**.  
[Live Demo](https://ass-8-todo-ejs-mongo.onrender.com/)

---

## Features

- Add, edit, and delete todos
- Set priority for each todo (High, Medium, Low)
- Filter todos by priority
- Responsive and clean UI
- Data persistence with MongoDB Atlas

---

## Demo

[https://ass-8-todo-ejs-mongo.onrender.com/](https://ass-8-todo-ejs-mongo.onrender.com/)

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Frontend:** EJS, HTML, CSS, JavaScript

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (or local MongoDB)

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/vaibhavpatidarbhoot/ass-8-todo-ejs-mongo.git
   cd ass-8-todo-ejs-mongo
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=your-mongodb-atlas-connection-string
   ```

4. **Run the app:**
   ```
   npm start
   ```
   The app will run on [http://localhost:3000](http://localhost:3000)

---

## Folder Structure

```
.
├── public/         # Static files (CSS, JS)
├── views/          # EJS templates
├── .env            # Environment variables
├── index.js        # Main server file
├── package.json
└── README.md
```

## Author

- [Vaibhav Patidar Bhoot](https://github.com/vaibhavpatidarbhoot)

---

## Acknowledgements

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Express.js](https://expressjs.com/)
