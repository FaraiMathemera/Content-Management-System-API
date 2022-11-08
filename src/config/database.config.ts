import { Sequelize } from "sequelize";
require("dotenv").config();

const db = new Sequelize({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

export default db;
