// Assuming your connection details are correct
const { Pool } = require('pg');

let pool = new Pool({
  user: 'root',
  host: '127.0.0.1',
  database: 'excelr',
  password: 'Raashidshaik#786',
  port: 3306,
});

// Test the connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to PostgreSQL database:', res.rows[0].now);
  }
});

// Later in your code, if you need to close the pool:
pool.end(async (err) => {
  if (err) {
    console.error('Error ending pool:', err);
  } else {
    console.log('Connection pool closed successfully.');
  }
});

module.exports = pool; // Export the pool for use in other modules
