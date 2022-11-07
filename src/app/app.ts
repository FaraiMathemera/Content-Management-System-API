import express from "express";
import ArticleRouter from "./routes";

const app = express();

app.use(express.json());

app.use("/api", ArticleRouter);

export default app;
