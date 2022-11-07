import sequelize from "../config/database.config";
import app from "./app";

const port = 3001;

const start = async (): Promise<void> => {
  await sequelize.sync().then(() => {
    console.log("connect to db");
  });
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    //   sequelize
    //     .authenticate()
    //     .then(() => {
    //       console.log("Connection to database successfully established");
    //     })
    //     .catch((error) => {
    //       console.log("Unable to connect to database", error);
    //     });
  });
};
void start();
