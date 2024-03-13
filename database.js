import mysql from "mysql2";

const connections = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'shop',
  password: 'root',
});

export default connections;