'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Message extends sequelize_1.Model {
        static associate(models) {
        }
    }
    Message.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        administrator_id: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
        previous_message: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'Message',
    });
    return Message;
};
