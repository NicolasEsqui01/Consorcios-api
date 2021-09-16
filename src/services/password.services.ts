import bcrypt from '../utils/bcrypt';
import { UpdatePassword } from '../interfaces/UpdatePassword.interface';

const db = require('../models');

const modifyPasswordAndAccountStatus = async ({ password, newPassword, id }: UpdatePassword) => {
  try {
    const adminPass: any = await db.Administrator.findOne({
      attributes: ['password', 'role'],
      where: {
        id,
      },
    });
    const { role } = adminPass.dataValues;

    if (!bcrypt.comparePassword(password, adminPass.dataValues.password)) {
      throw {
        type: 'error',
        status: 200,
        message: 'password incorrect',
      };
    }

    if (bcrypt.comparePassword(newPassword, adminPass.dataValues.password)) {
      throw {
        type: 'warning',
        status: 206,
        message: 'The password equal that your new password, please change it!',
      };
    }

    const encryptPassword: string = bcrypt.encryptPassword(newPassword);

    if (['SUPER_ADMIN', 'ADMIN'].includes(role)) {
      await db.Administrator.update(
        { password: encryptPassword, accountStatus: true },
        {
          where: {
            id,
          },
        }
      );
    } else {
      await db.User.update(
        {
          password: encryptPassword,
        },
        {
          where: {
            id,
          },
        }
      );
    }

    return {
      type: 'success',
      status: 200,
      message: 'update password successfully',
    };
  } catch (err) {
    throw err;
  }
};

const updatePassword = () => {};

export { modifyPasswordAndAccountStatus, updatePassword };
