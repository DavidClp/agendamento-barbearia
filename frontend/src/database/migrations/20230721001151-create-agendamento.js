'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('agendamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      servico: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dia: {
        allowNull: false,
        type: Sequelize.DATE
      },
      hora: {
        allowNull: false,
        type: Sequelize.TIME
      },
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: "usuarios"
          },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('agendamentos');
  }
};