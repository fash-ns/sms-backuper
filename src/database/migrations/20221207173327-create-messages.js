'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('messages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER.UNSIGNED
            },
            message_id: {
                allowNull: false,
                unique: true,
                type: Sequelize.INTEGER.UNSIGNED
            },
            recipient_number: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            sender_number: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            status: {
                allowNull: false,
                type: Sequelize.STRING
            },
            parts: {
                allowNull: false,
                type: Sequelize.INTEGER.UNSIGNED
            },
            body: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            send_time: {
                allowNull: false,
                type: Sequelize.DATE
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('messages');
    }
};