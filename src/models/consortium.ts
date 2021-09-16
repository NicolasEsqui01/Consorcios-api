'use strict';

import { Model } from 'sequelize';
import { ConsortiumAttributes } from '../interfaces/consortiumAttributes.interface';

module.exports = (sequelize: any, DataTypes:any) => {
  class Consortium
    extends Model<ConsortiumAttributes>
    implements ConsortiumAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    register_code!: number;
    payment_cbu!: number;
    payment_alias!: string;
    payment_account_num!: string;
    payment_bank!: string;
    payment_holder!: string;
    email!: string;
    phone!: string;
    address!: string;
    units!: number;
    static associate(models: any) {
      // Define association here
      // Consortium.belongsTo(models.AdminOffice);
      Consortium.belongsToMany(models.Administrator,  {
        through:  'AdminConsortiums',
      });;
    }
  }
  Consortium.init(
    {
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    register_code:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    payment_cbu:{
      type:DataTypes.INTEGER
    },
    payment_alias:{
      type:DataTypes.STRING
    },
    payment_account_num:{
      type:DataTypes.STRING
    },
    payment_bank:{
      type:DataTypes.STRING
    },
    payment_holder:{
      type:DataTypes.STRING
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phone:{
      type:DataTypes.STRING,
      allowNull:false
    },
    address:{
      type:DataTypes.STRING,
      allowNull:false
    },
    units:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
  },  {
    sequelize,
    modelName: "Consortium",
  }
  )
  return Consortium
}
