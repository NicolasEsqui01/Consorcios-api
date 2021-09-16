'use strict';
import { Model } from 'sequelize';

import { AdminOfficeAttributes } from '../interfaces/adminOfficeAttributes.interface';

module.exports = (sequelize: any, DataTypes: any) => {
  class AdminOffice
    extends Model<AdminOfficeAttributes>
    implements AdminOfficeAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    cuit!: string;
    fiscal_status!: string;
    address!: string;
    phone!: string;
    payment_cbu!: string;
    payment_alias!: string;
    payment_account_num!: string;
    payment_bank!: string;
    payment_holder!: string;
    active_consortiums!: boolean;
    head_admin!: boolean;

    static associate(models: any) {
      // define association here
    }
  };
  AdminOffice.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      cuit: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      head_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "AdminOffice",
    }
  );
  return AdminOffice;
};
