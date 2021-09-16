'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class BuildingManager extends sequelize_1.Model {
        static associate(models) {
        }
    }
    BuildingManager.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dni: {
            type: DataTypes.INTEGER,
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
        building_resident: {
            type: DataTypes.BOOLEAN,
        },
        consortium_id: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'BuildingManager',
    });
    return BuildingManager;
};
