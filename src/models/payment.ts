'use strict';
import { PaymentAttributes } from '../interfaces/paymentAttributes.interface';
import { Model } from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class Payment extends Model<PaymentAttributes> implements PaymentAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    status!: string;
    date_payment!: Date;
    date_confirmed!: Date;
    administrator_id!: number;
    user_id!: number;
    consortium_id!: number;
    unit_id!: number;
    static associate(models: any) {
      // define association here
    }
  }
  Payment.init(
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
    },
    {
      sequelize,
      modelName: 'Payment',
    }
  );
  return Payment;
};
