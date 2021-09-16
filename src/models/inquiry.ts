'use strict';

import { Model } from 'sequelize';
import { InquiryAttributes } from '../interfaces/inquiryAttributes.interface';

module.exports = (sequelize: any, DataTypes: any) => {
  class Inquiry extends Model<InquiryAttributes> implements InquiryAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    status!: string;
    response!: string;
    created_at!: Date;
    updated_at!: Date;
    message!: string;
    unit_id!: number;
    user_id!: number;
    administrator_id!: number;
    static associate(models: any) {
      // define association here
    }
  }
  Inquiry.init(
    {
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
      response: {
        type: DataTypes.STRING,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        type: DataTypes.DATE,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unit_id: {
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
    },
    {
      sequelize,
      modelName: 'Inquiry',
    }
  );
  return Inquiry;
};
