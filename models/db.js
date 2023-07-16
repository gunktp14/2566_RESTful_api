//install module mysql and import db.config.js for implement
const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

//Create a connection to the database server

const { host, user, password, database } = dbConfig;

const connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database successfully!");
});

module.export = connection;
