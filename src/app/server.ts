import db from "../config/database.config";
import app from "./app";

const port = 3001;

db.sync().then(() => {
  console.log("Connected to db");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
