import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../../config/database.config";

/**
 * @swagger
 * tags:
 *   name: Article
 *   description: Article managing API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required:
 *         - title
 *         - articleBody
 *         - authorName
 *       properties:
 *         id:
 *           type: number
 *           description: Id of article auto increment
 *         title:
 *           type: string
 *           description: Title of Article
 *         authorName:
 *           type: string
 *           description: The name of the author
 *         articleBody:
 *           type: string
 *           description: Body of the article
 *         published:
 *           type: boolean
 *           description: Published state of article
 *         publishedOn:
 *           type: date
 *           description: Published date of article
 *       example:
 *         id: 1
 *         title: Sample Title
 *         authorName: John Doe
 *         articleBody: some sort of text that mimics the body of an article. Who knows what else it might contain.
 *         published: false
 *         publishedOn: 2022-11-07 11:01:20.651+02
 */

interface ArticleAttributes {
  id?: number;
  title: string;
  articleBody: string;
  publishedOn?: Date;
  authorName: string;
  published?: boolean;
}

export class Article extends Model<ArticleAttributes> {}

Article.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: { type: DataTypes.STRING, allowNull: false },
    articleBody: { type: DataTypes.STRING, allowNull: false },
    publishedOn: { type: DataTypes.DATE, allowNull: true },
    authorName: { type: DataTypes.STRING, allowNull: false },
    published: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "articles",
  }
);
