'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Payment extends sequelize_1.Model {
        static associate(models) {
        }
    }
    Payment.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_payment: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
        date_confirmed: {
            type: DataTypes.DATE,
        },
        unit_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        consortium_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        administrator_id: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'Payment',
    });
    return Payment;
};
