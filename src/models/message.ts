'use strict';

import { Model } from 'sequelize';
import { MessageAttributes } from '../interfaces/messageAttributes.interface';

module.exports = (sequelize: any, DataTypes: any) => {
  class Message extends Model<MessageAttributes> implements MessageAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    user_id!: number;
    administrator_id!: number;
    content!: string;
    date!: Date;
    status!: string;
    previous_message!: number;
    static associate(models: any) {
      // define association here
    }
  }
  Message.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      administrator_id: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      previous_message: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Message',
    }
  );
  return Message;
};
