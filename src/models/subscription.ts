'use strict';

import { Model } from 'sequelize';
import { SubscriptionAttributes } from '../interfaces/subscriptionAttributes.interface';

module.exports = (sequelize: any, DataTypes: any) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     id!:number;
     type!:string;
     status!:string;
     price!:number;
     description!:string;
     active_buildings!:number;
     buildings!:number;
    static associate(models:any) {
      // Define association here
      Subscription.belongsTo(models.Administrator);
    }
  }
  Subscription.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active_buildings: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      buildings: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Subscription',
    }
  );
  return Subscription;
};
