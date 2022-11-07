import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../../config/database.config";

interface ArticleAttributes {
  id?: number;
  title: string;
  articleBody: string;
  publishedOn: Date;
  authorName: string;
  published: boolean;
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
    title: { type: DataTypes.INTEGER, allowNull: false },
    articleBody: { type: DataTypes.STRING, allowNull: false },
    publishedOn: { type: DataTypes.DATE, allowNull: false },
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

console.log(Article === sequelize.models.articles);
