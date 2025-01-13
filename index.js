const express = require('express');
const sql = require('mssql');
require('dotenv').config();

const app = express();
const port = 3000; // Choose any port you want

// Configuration for SQL Server
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,               // Use encryption
    trustServerCertificate: true // To avoid SSL certificate errors
  }
};

// Test database connection and create an API endpoint
app.get('/api/users', async (req, res) => {
  try {
    // Connect to SQL Server
    await sql.connect(config);
    const result = await sql.query('SELECT * FROM Users'); // Your SQL query
    res.json(result.recordset); // Return the data as JSON
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    sql.close();
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
