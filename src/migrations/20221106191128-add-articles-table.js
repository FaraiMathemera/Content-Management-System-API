'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('articles', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
    title: { type: Sequelize.STRING, allowNull: false },
    articleBody: { type: Sequelize.STRING, allowNull: false },
    publishedOn: { type: Sequelize.DATE, allowNull: true },
    authorName: { type: Sequelize.STRING, allowNull: false },
    published: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('articles');
  }
};
