require("dotenv").config();
module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: "localhost",
    dialect: "postgres",
    logging: false,
  }}
  console.log(process.env.USERNAME)