'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('products', 'style_tag', { transaction: t}),
        queryInterface.addColumn('products', 'styleTag', { type: Sequelize.INTEGER }, { transaction: t})
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('products', 'styleTag', { transaction: t}),
        queryInterface.addColumn('products', 'style_tag', { type: Sequelize.INTEGER }, { transaction: t})
      ])
    })
  }
};
