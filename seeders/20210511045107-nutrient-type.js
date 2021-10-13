"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const nutrientModuleId = await queryInterface.rawSelect(
      "module_master",
      { where: { module_key: "nutrient" } },
      ["id"]
    );

    await queryInterface.bulkInsert("types", [
      {
        title: "type 1",
        module_id: nutrientModuleId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "type 2",
        module_id: nutrientModuleId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "type 3",
        module_id: nutrientModuleId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "type 4",
        module_id: nutrientModuleId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "type 5",
        module_id: nutrientModuleId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const nutrientModuleId = await queryInterface.rawSelect(
      "module_master",
      { where: { module_key: "nutrient" } },
      ["id"]
    );
    await queryInterface.bulkDelete("types", {module_id : nutrientModuleId}, {});
  },
};
