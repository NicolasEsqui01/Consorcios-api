import { Request, Response } from 'express';
import { addAdministrator, modifyData, fetchAll, findOne, login } from '../services/administrator.services';

const loginAdministrator = async (req: any, res: Response) => {
  const { dni, password } = req.body;

  if (!dni || !password) {
    return res.status(200).json({ message: 'You must complete the password and ID field' });
  }

  try {
    const administratorFound = await login({ dni, password });
    return res.status(200).json(administratorFound);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

const newAdministrator = async (req: any, res: Response) => {
  try {
    const { name, phone, dni, matric_num, email, cuil } = req.body;
    if (name && phone && dni && matric_num && email && cuil) {
      const newUser = await addAdministrator(req.body);
      return res.status(200).json(newUser);
    } else {
      return res.status(400).json({ message: 'You need to fill in the fields' });
    }
  } catch (err) {
    return res.status(409).json({ message: err.message });
  }
};

const modifyAdministrator = async (req: any, res: Response) => {
  try {
    const administratorModify = await modifyData(req.params.id, req.body);
    res.status(200).json(administratorModify);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

const fetchAllAdministrator = async (req: any, res: Response) => {
  try {
    const allAdministrator = await fetchAll(req.query);
    res.status(200).json(allAdministrator);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

const oneAdministrator = async (req: any, res: Response) => {
  try {
    const oneAdmin = await findOne(req.params.id);
    res.status(200).json(oneAdmin);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

export { loginAdministrator, newAdministrator, modifyAdministrator, fetchAllAdministrator, oneAdministrator };
