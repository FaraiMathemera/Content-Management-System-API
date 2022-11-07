import express from "express";
import ArticleRouter from "./routes";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Content management System API",
      version: "1.0.0",
      description: "Content management system API",
    },
    servers: [{ url: "http://localhost:3001" }],
  },
  apis: ["../routes/*.ts"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use("/api", ArticleRouter);

export default app;
