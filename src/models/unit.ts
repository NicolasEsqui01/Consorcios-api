'use strict';
import {
  Model
} from 'sequelize'

import { UnitAttributes } from '../interfaces/unitAttributes.interface';

module.exports = (sequelize: any, DataTypes: any) => {
  class Unit extends Model<UnitAttributes> implements UnitAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    type!: string;
    complementary_unit!: number;
    unit_number!: number;
    owner!: number;
    tenant!: number;
    floor!: string;
    apt!: string;

    static associate(models: any) {
      // define association here
    }
  };
  Unit.init(
    {
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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      apt: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Unit",
    }
  );
  return Unit;
};
