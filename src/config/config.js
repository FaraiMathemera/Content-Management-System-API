require("dotenv").config({ path: './../.env' });

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: "localhost",
    dialect: "postgres",
    logging: false,
  }}

  console.log(process.env.DB_USERNAME)