// server/server.js
const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from dotenv.env

const app = express();
const port = process.env.PORT || 5000;

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Define your API routes and controllers here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
