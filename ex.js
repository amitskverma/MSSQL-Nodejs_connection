const sql = require('mssql'); // Use require in CommonJS

// Configuration for connecting to SQL Server
const config = {
  user: 'sa',        // SQL Server username
  password: 'Test@123',    // SQL Server password
  server: 'localhost',          // Use 'localhost' for default instance
  database: 'practiceDB',    // Replace with your database name
  options: {
    encrypt: true,              // Encrypt connection (recommended)
    trustServerCertificate: true // Set to false if using SSL certificates
  }
};

// Connect to SQL Server and run a query
sql.connect(config)
  .then(() => {
    return sql.query('SELECT * FROM Users'); // Example query
  })
  .then(result => {
    console.log('Query Results:', result.recordset); // Output query results
  })
  .catch(err => {
    console.error('Error:', err); // Handle any errors
  })
  .finally(() => {
    sql.close(); // Close the connection
  });
