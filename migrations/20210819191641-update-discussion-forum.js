'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("discussion_forums", "district_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "district_admins",
        key: "id",

      },
      field:"district_id"

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("discussion_forums", "district_id");

  }
};
