"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const nutrientModuleId = await queryInterface.rawSelect(
      "module_master",
      { where: { module_key: "nutrient" } },
      ["id"]
    );

    await queryInterface.bulkInsert("uses", [
      {
        title: "uses 1",
        module_id: nutrientModuleId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "uses 2",
        module_id: nutrientModuleId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "uses 3",
        module_id: nutrientModuleId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "uses 4",
        module_id: nutrientModuleId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "uses 5",
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
    await queryInterface.bulkDelete("uses", {module_id : nutrientModuleId}, {});
  },
};
