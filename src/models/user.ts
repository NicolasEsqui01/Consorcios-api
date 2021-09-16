'use strict';
import { Model } from 'sequelize';
import { UserAttributes } from '../interfaces/userAttributes.interface';
module.exports = (sequelize: any, DataTypes:any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    role!: string;
    email!: string;
    email_status!: boolean;
    name!: string;
    password!: string;
    phone!: string;
    dni!: number;
    cuil?: string;
    isActive?: boolean;
    static associate(models: any) {
      // define association here
    }
  };
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email_status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cuil: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive:  {
        type:  DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:  true,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
