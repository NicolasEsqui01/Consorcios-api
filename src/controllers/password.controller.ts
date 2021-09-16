import { Response } from 'express';
import { modifyPasswordAndAccountStatus } from '../services/password.services';

const updatePassword = async (req: any, res: Response) => {
  const { password, newPassword } = req.body;
  const { id } = req.user;

  if (!password || !newPassword) {
    return res.status(200).json({ message: 'The password and newPassword fields must be complete' });
  }
  
  try {
    const result = await modifyPasswordAndAccountStatus({ password, newPassword, id });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(error.status).json({ ...error });
  }
};

const forgetPassword = () => {};

export { updatePassword, forgetPassword };
