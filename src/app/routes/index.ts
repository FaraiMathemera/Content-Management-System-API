import express from "express";
import ArticleController from "../controllers/article-controller";
import ArticleValidator from "../validators";
import Middleware from "../middleware";

const router = express.Router();

router.get("/", ArticleController.getAllArticles);

router.post(
  "/create",
  ArticleValidator.validateCreateUpdate(),
  Middleware.validationError,
  ArticleController.createArticle
);

router.get(
  "/:id",
  ArticleValidator.validateId(),
  Middleware.validationError,
  ArticleController.getOneArticle
);

router.put(
  "/update/:id",
  ArticleValidator.validateCreateUpdate(),
  Middleware.validationError,
  ArticleController.updateArticle
);

router.delete(
  "/delete/:id",
  ArticleValidator.validateId(),
  Middleware.validationError,
  ArticleController.destroyArticle
);

router.put(
  "/publish/:id",
  ArticleValidator.validatePublish,
  Middleware.validationError,
  ArticleController.updatePublishedState
);

export default router;
