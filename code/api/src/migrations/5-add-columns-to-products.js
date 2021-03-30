'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn("products", "category", {type: Sequelize.INTEGER}, {transaction: t}),
        queryInterface.addColumn("products", "style_tag", {type: Sequelize.INTEGER}, {transaction: t})
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn("products", "category", { transaction: t }),
        queryInterface.removeColumn("products", "style_tag", { transaction: t })
      ])
    })
  },
};
