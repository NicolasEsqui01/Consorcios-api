'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Consortium extends sequelize_1.Model {
        static associate(models) {
        }
    }
    Consortium.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        register_code: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        admin_office: {
            type: DataTypes.INTEGER,
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        units: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        units_relation: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Consortium',
    });
    return Consortium;
};
