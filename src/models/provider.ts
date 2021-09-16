'use strict';

import { ProviderAttributes } from '../interfaces/providerAttributes.interface';

import { Model } from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class Provider extends Model<ProviderAttributes> implements ProviderAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    code!: number;
    name!: string;
    cuit!: number;
    address!: string;
    static associate(models: any) {
      // define association here
    }
  }
  Provider.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      code: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cuit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Provider',
    }
  );
  return Provider;
};
