'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('crates', [
      {
        name: 'Clothes for Men',
        description: 'A monthly supply of trendy clothes for men.',
        createdAt: new Date(),
        updatedAt: new Date(),
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id
      },
      {
        name: 'Clothes for Women',
        description: 'A monthly supply of trendy clothes for women.',
        createdAt: new Date(),
        updatedAt: new Date(),
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id
      },
      {
        name: 'Accessories for Men',
        description: 'A monthly supply of trendy accessories for men',
        createdAt: new Date(),
        updatedAt: new Date(),
        type: params.product.types.accessory.id,
        gender: params.user.gender.male.id
      },
      {
        name: 'Accessories for Women',
        description: 'A monthly supply of trendy accessories for women',
        createdAt: new Date(),
        updatedAt: new Date(),
        type: params.product.types.accessory.id,
        gender: params.user.gender.female.id
      },
      {
        name: 'Clothes and Accessories for Men',
        description: 'A monthly supply of trendy clothes and accessories for men',
        createdAt: new Date(),
        updatedAt: new Date(),
        gender: params.user.gender.male.id
      },
      {
        name: 'Clothes and Accessories for Women',
        description: 'A monthly supply of trendy clothes and accessories for women',
        createdAt: new Date(),
        updatedAt: new Date(),
        gender: params.user.gender.female.id
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('crates', null, {});
  }
}
