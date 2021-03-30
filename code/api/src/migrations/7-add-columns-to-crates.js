'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn("crates", "type", { type: Sequelize.INTEGER }, { transaction: t }),
        queryInterface.addColumn("crates", "gender", { type: Sequelize.INTEGER }, { transaction: t })
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn("crates", "type", { transaction: t }),
        queryInterface.removeColumn("crates", "gender", { transaction: t })
      ])
    })
  }
};
