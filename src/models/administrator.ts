'use strict';
import { Model } from 'sequelize';
import { AdministratorAttributes } from '../interfaces/administratorAttributes.interface';
import bcrypt from "../utils/bcrypt";
import { v4 as uuidv4 } from 'uuid';

module.exports = (sequelize: any, DataTypes: any) => {
  class Administrator extends Model<AdministratorAttributes> implements AdministratorAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    admin_code!: string;
    name!: string;
    role!: string;
    email!: string;
    phone!: string;
    dni!: number;
    password!: string;
    matric_num!: string;
    cuil!: string;
    accountStatus!: boolean;
    static associate(models: any) {
      // Define association here
      Administrator.belongsToMany(models.Consortium, {
        through: 'AdminConsortiums',
      });
      // Administrator.belongsTo(models.AdminOffice);
      Administrator.hasOne(models.Subscription);
    }
  }
  Administrator.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      admin_code: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["SUPER_ADMIN", "ADMIN"]
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        // validate: {
        //   is: ["^\d{8}(?:[-\s]\d{4})?$"]
        // }
      },
      matric_num: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      cuil: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        // validate: {
          // is: ["^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$", "g"]
        // },
      },
      accountStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      sequelize,
      modelName: 'Administrator',
    }
  );

  Administrator.beforeCreate((admin, options) => {
    const passwordEncrypt = bcrypt.encryptPassword(admin.password);
    admin.password = passwordEncrypt;
    admin.admin_code = uuidv4();
    return;
  })

  return Administrator;
};
