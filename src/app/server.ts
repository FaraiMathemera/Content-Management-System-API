import db from "../config/database.config";
import app from "./app";
require("dotenv").config();

const port = process.env.PORT || 3000;

db.sync().then(() => {
  console.log("Connected to db");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
