'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("teachers","subscribe_id")
    await queryInterface.removeColumn("teachers","package_id")
    await queryInterface.addColumn("teachers","parent_id",{
      type: Sequelize.INTEGER,
      allowNull: true,
      field:"parent_id",
      references: {
        model: "users",
        key: "id",
      },
    })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("teachers","parent_id")

  }
};
