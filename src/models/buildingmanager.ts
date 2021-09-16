'use strict';

import { Model } from 'sequelize';
import { BuildingManagerAttributes } from '../interfaces/buildingManagerAttributes.interface';

module.exports = (sequelize: any, DataTypes: any) => {
  class BuildingManager extends Model<BuildingManagerAttributes> implements BuildingManagerAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    name!: string;
    dni!: number;
    phone!: string;
    payment_cbu!: number;
    payment_alias!: string;
    payment_account_num!: string;
    payment_bank!: string;
    building_resident!: boolean;
    consortium_id!: number;
    static associate(models: any) {
      // define association here
    }
  }

  BuildingManager.init(
    {
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
    },
    {
      sequelize,
      modelName: 'BuildingManager',
    }
  );
  return BuildingManager;
};
