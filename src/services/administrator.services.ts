import generatorPassword from 'generate-password';
import bcrypt from '../utils/bcrypt';
import { createToken } from '../middlewares/auth/jwt.middelware';
import emailService from './mailing';

const db = require('../models');
const { AdministratorServices } = require('../interfaces/administratorAttributes.interface');
const { ResponseStatus } = require('../interfaces/responses.interface');
const handlerError = require('../utils/handlerError');

import { IEmailService } from '../interfaces/IEmailService.interface';

const login = async (body: typeof AdministratorServices): Promise<typeof ResponseStatus> => {
  const { dni, password } = body;
  let foundAdministrator: any;

  try {
    foundAdministrator = await db.Administrator.findOne({
      where: {
        dni,
      },
    });
  } catch (err) {
    console.error(err);
  }

  if (!foundAdministrator) {
    throw new Error('User not exist');
  }

  if (!bcrypt.comparePassword(password, foundAdministrator.dataValues.password)) {
    throw new Error("password isn't validate");
  }

  delete foundAdministrator.dataValues.password;
  const tokenUser: string = createToken(foundAdministrator.dataValues);
  return {
    user: foundAdministrator,
    token: tokenUser,
    message: 'Successful login',
  };
};
const addAdministrator = async (body: typeof AdministratorServices): Promise<typeof ResponseStatus> => {
  try {
    const { dni, cuil, name, email } = body;
    const isExist = await checkExist(cuil, dni);
    if (isExist) {
      throw new Error('Administrator alredy exists');
    }

    const password: string = generatorPassword.generate({ length: 15, numbers: true });
    const newAdministrator: any = await db.Administrator.create({ ...body, password });
    const emailSetting: IEmailService = {
      to: email,
      subject: 'Consortiums',
      template: 'admin-register',
      password,
      dni,
      name,
    };
    await emailService(emailSetting);
    delete newAdministrator.dataValues.password;
    return {
      user: newAdministrator,
      message: 'Create profile administrator complete !, welcome to the page.',
    };
  } catch (err) {
    throw err;
  }
};

const checkExist = async (cuil: string, dni: string): Promise<typeof ResponseStatus> => {
  try {
    const checkUser = await db.Administrator.findOne({
      where: {
        cuil: cuil,
        dni: dni,
      },
    });

    return checkUser;
  } catch (err) {
    return handlerError(err);
  }
};

const findOne = async (id: number): Promise<typeof ResponseStatus> => {
  try {
    const administratorFinder = await db.Administrator.findOne({
      where: { id: Number(id) },
    });
    if (administratorFinder === null) {
      throw {
        status: 404,
        message: 'User not exist',
      };
    }
    return administratorFinder;
  } catch (err) {
    return handlerError(err);
  }
};
const fetchAll = async (query: Object) => {
  try {
    const allAdministrator = await db.Administrator.findAll({
      where: { ...query },
    });
    return allAdministrator;
  } catch (err) {
    return handlerError(err);
  }
};
const modifyData = async (id: number, body: Object) => {
  try {
    const administrator = await findOne(id);
    const modifyAdministrator = await administrator.update({
      where: { ...body },
    });
    return modifyAdministrator;
  } catch (err) {
    return handlerError(err);
  }
};

export { login, addAdministrator, findOne, fetchAll, modifyData };
