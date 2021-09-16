'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Unit extends sequelize_1.Model {
        static associate(models) {
        }
    }
    Unit.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        unit_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        complementary_unit: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        tenant: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        floor: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        apt: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'Unit',
    });
    return Unit;
};
