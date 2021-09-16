import { Response, NextFunction } from 'express';
const db = require('../../models');

export const verifyRolSuperAdmin = async (req: any, res: Response, next: NextFunction) => {
  const { id } = req.user;
  const userAdmin = await db.Administrator.findOne({
    where: {
      role: 'SUPER_ADMIN',
      id,
    },
  });
  
  if(!userAdmin){
    return res.status(401).json({message: "The Rol from user it isn't validate"});
  };
  return next();
};
