'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'users',
      'clever_id',
      {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      }
    )  
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'clever_id'); 
  }
};