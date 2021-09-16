const handlerError = require('../utils/handlerError');
const db = require('../models');
const { CreateOfficeint } = require("../interfaces/adminOfficeAttributes.interface");


export const addOffice = async (body: typeof CreateOfficeint) => {
    try {
      console.log(body, 'ESTO ES MI BODY');
      const newOffice = await db.AdminOffice.create({ ...body });
      console.log(newOffice, 'esto es lo que paso');
      return newOffice;
    } catch (err) {
      console.log(err, 'esto es mi error');
      return handlerError(err);
    }
  };
  

export const modifyOffice = async (id: number, body: Object) => {
  try {
    const office = await db.AdminOffice.findOne({ where: { id: id } });
    const updatetOffice = await office.update({ ...body });
    return updatetOffice;
  } catch (err) {
    return handlerError(err);
  }
};

export const fetchOffices = async (query: Object) => {
  try {
    const allOffices = await db.AdminOffice.findAll();
    return allOffices;
  } catch (err) {
    return handlerError(err);
  }
};

export const oneOffice = async (id: number) => {
  try {
    const officesFinder = await db.AdminOffice.findOne({
      where: { id: Number(id) },
    });
    if (officesFinder === null) {
      throw {
        status: 404,
        message: 'Office not exist',
      };
    }
    return officesFinder;
  } catch (err) {
    return handlerError(err);
  }
};
