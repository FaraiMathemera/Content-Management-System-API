import { Request, Response } from "express";
import sequelize from "../../config/database.config";
import { Article } from "../models";
class ArticleController {
  async createArticle(req: Request, res: Response) {
    try {
      const body = req.body;
      await sequelize.transaction(async (transaction) => {
        await Article.create(body, { transaction });
      });
      return res.status(200).json({ message: "Article created successfully." });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async getOneArticle(req: Request, res: Response) {
    try {
      const articleId = req.params.id;
      const article = await Article.findByPk(articleId);
      return res.status(200).json(article);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async getAllArticles(req: Request, res: Response) {
    try {
      const limit = (req.query.limit as number | undefined) || 10;
      const offset = req.query.offset as number | undefined;
      const articles = await Article.findAll({ where: {}, limit, offset });
      return res.status(200).json(articles);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async updateArticle(req: Request, res: Response) {
    try {
      const articleId = req.params.id;
      const article = req.body;
      await sequelize.transaction(async (transaction) => {
        await Article.update(article, {
          where: { id: articleId },
          transaction,
        });
      });
      return res.status(200).json({ message: "Article successfully updated." });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async updatePublishedState(req: Request, res: Response) {
    try {
      const articleId = req.params.id;
      const state = req.body;
      console.log(state);
      await sequelize.transaction(async (transaction) => {
        await Article.update(state, { where: { id: articleId }, transaction });
      });
      return res
        .status(200)
        .json({ message: "Article publish state successfully updated." });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async destroyArticle(req: Request, res: Response) {
    try {
      const articleId = req.params.id;
      await sequelize.transaction(async (transaction) => {
        await Article.destroy({ where: { id: articleId }, transaction });
      });
      return res.status(200).json({ message: "Article successfully deleted." });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new ArticleController();
