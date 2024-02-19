const mysql = require('mysql');

// MySQL database connection
const db = mysql.createConnection({
  host: '0.0.0.0/0',
  user: 'root',
  password: '',
  database: 'trijal_group',
  port: '3306',
});

module.exports = db;
