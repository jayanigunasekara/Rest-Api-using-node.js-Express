//const { createPool } = require("mysql");

import { createPool } from "mysql2";

//import { createPool } from "mysql";
createPool;
const pool = createPool({
  //   port: process.env.DB_PORT,
  //   host: process.env.DB_HOST,
  //   user: process.env.DB_USER,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.MYSQL_DB,
  //   connectionLimit: 10,
  port: 3306,
  host: "localhost",
  user: "root",
  password: "123",
  database: "farm",
  connectionLimit: 10,
});

export default pool;
