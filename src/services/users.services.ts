const db = require('../models');
const { userServices, loginUser } = require('../interfaces/userAttributes.interface');
const { ResponseStatus } = require('../interfaces/responses.interface');
const handlerError = require('../utils/handlerError');
import { createToken } from '../middlewares/auth/jwt.middelware';
import bcrypt from "../utils/bcrypt";

const UserServices = {
  checkExist: async (dni: string, cuil: string): Promise<typeof ResponseStatus> => {
    try {
      const checkUser = await db.User.findOne({
        where: {
          dni,
          cuil
        },
      });

      return checkUser;
    } catch (err) {
      return handlerError(err);
    }
  },
  login: async (body: typeof loginUser) => {
    const { password, dni } = body;
    let foundUser;
    try {
      /**
       * Busco al usuario por el campo DNI. Lo definí así porque el DNI es unico por persona.
      */
      foundUser = await db.User.findOne({
        where: {
          dni,
        },
      });
    } catch (err) {
      handlerError(err);
    }

    if (!foundUser) {
      throw new Error('User not exist');
    };

    if(!bcrypt.comparePassword(password, foundUser.dataValues.password)){
      throw new Error("password isn't validate");
    };

    delete foundUser.dataValues.password;
    const tokenUser = createToken(foundUser.dataValues);
    return {
      user: foundUser,
      token: tokenUser,
      message: 'Successful login',
    };

  },
  findOne: async (id: number): Promise<typeof ResponseStatus> => {
    try {
      const userFinder = await db.User.findOne({ where: { id: Number(id) } });
      if (userFinder === null) {
        throw {
          status: 404,
          message: 'User not exist',
        };
      }
      return userFinder;
    } catch (err) {
      return handlerError(err);
    }
  },
  fetchAll: async (query: Object) => {
    try {
      const allUsers = await db.User.findAll({ where: { ...query } });
      return allUsers;
    } catch (err) {
      return handlerError(err);
    }
  },
  modifyData: async (id: number, body: Object) => {
    try {
      const user = await UserServices.findOne(id);
      const modifyUser = await user.update({ where: { ...body } });
      console.log(modifyUser, 'esto es');
      return modifyUser;
    } catch (err) {
      return handlerError(err);
    }
  },
  createUser: async (body: typeof userServices): Promise<typeof ResponseStatus> => {
    try {
      const { dni, cuil } = body;
      const isExist = await UserServices.checkExist(dni,cuil);
      if (isExist){
        throw new Error('User alredy exists');
      }
      const { password } = body;
      const bodyUser = {...body, password: bcrypt.encryptPassword(password)}  
      const newUser = await db.User.create(bodyUser);
      delete newUser.dataValues.password;
      return {
        user: newUser,
        message: 'Create complete !, welcome to the page.',
      };
    } catch (err) {
      throw err;
    }
  },
};
module.exports = UserServices;
