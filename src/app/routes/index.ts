import express from "express";
import ArticleController from "../controllers/article-controller";
import ArticleValidator from "../validators";
import Middleware from "../middleware";

const router = express.Router();

/**
 * @swagger
 * /api/:
 *   get:
 *     summary: Get all articles
 *     tags: [Article]
 *
 *     responses:
 *       200:
 *         description: Articles
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       400:
 *         description: Article does not exist
 */
router.get("/", ArticleController.getAllArticles);

/**
 * @swagger
 * /api/create:
 *   post:
 *     summary: Create article
 *     tags: [Article]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - authorName
 *               - articleBody
 *               - published
 *             properties:
 *               title:
 *                  type: string
 *                  description: Title of article
 *               authorName:
 *                  type: string
 *                  description: name of the author
 *               articleBody:
 *                  type: string
 *                  description: Body of the article
 *               published:
 *                  type: boolean
 *                  description: Published state of article
 *     responses:
 *       200:
 *         description: Article created successfully.
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       400:
 *         description: Errors occurred during creation
 */

router.post(
  "/create",
  ArticleValidator.validateCreateUpdate(),
  Middleware.validationError,
  ArticleController.createArticle
);

/**
 * @swagger
 * /api/{id}:
 *   get:
 *     summary: Get article by id
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The article id
 *
 *     responses:
 *       200:
 *         description: Article id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       400:
 *         description: Article does not exist
 */

router.get(
  "/:id",
  ArticleValidator.validateId(),
  Middleware.validationError,
  ArticleController.getOneArticle
);

/**
 * @swagger
 * /api/update/{id}:
 *   put:
 *     summary: Update article
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The article id
 *
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - authorName
 *               - articleBody
 *               - published
 *             properties:
 *               title:
 *                  type: string
 *                  description: Title of article
 *               authorName:
 *                  type: string
 *                  description: name of the author
 *               articleBody:
 *                  type: string
 *                  description: Body of the article
 *               published:
 *                  type: boolean
 *                  description: Published state of article
 *     responses:
 *       200:
 *         description: Article successfully updated.
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       400:
 *         description: Article was not updated
 */

router.put(
  "/update/:id",
  ArticleValidator.validateCreateUpdate(),
  Middleware.validationError,
  ArticleController.updateArticle
);

/**
 * @swagger
 * /api/delete/{id}:
 *   delete:
 *     summary: Delete article by id
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The article id
 *     responses:
 *       200:
 *         description: Article was successfully deleted
 *       400:
 *         description: Article was not deleted
 */

router.delete(
  "/delete/:id",
  ArticleValidator.validateId(),
  Middleware.validationError,
  ArticleController.destroyArticle
);

/**
 * @swagger
 * /api/publish/{id}:
 *   put:
 *     summary: Change published state by id
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The article id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - published
 *             properties:
 *               published:
 *                  type: boolean
 *                  description: Published state of article
 *     responses:
 *       200:
 *         description: Article publish state successfully updated.
 */
router.put(
  "/publish/:id",
  ArticleValidator.validatePublish(),
  Middleware.validationError,
  ArticleController.updatePublishedState
);

export default router;
