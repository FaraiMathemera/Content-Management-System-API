import { Sequelize } from "sequelize";
import pg from "pg";

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "mydb",
  username: "postgres",
  password: "admin",
  logging: true,
});

export default db;
