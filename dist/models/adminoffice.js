'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class AdminOffice extends sequelize_1.Model {
        static associate(models) {
        }
    }
    AdminOffice.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        cuit: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        fiscal_status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payment_cbu: {
            type: DataTypes.INTEGER,
        },
        payment_alias: {
            type: DataTypes.STRING,
        },
        payment_account_num: {
            type: DataTypes.STRING,
        },
        payment_bank: {
            type: DataTypes.STRING,
        },
        payment_holder: {
            type: DataTypes.STRING,
        },
        active_consortiums: {
            type: DataTypes.STRING,
        },
        head_admin: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'AdminOffice',
    });
    return AdminOffice;
};
