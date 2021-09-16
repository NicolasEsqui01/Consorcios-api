import { Op } from "sequelize/types";

const db = require('../models');
const handlerError = require('../utils/handlerError');

export const createConsortium = async (body: any) => {
  const { admin_code } = body;
  try {
    const administrator: any = await db.Administrator.findOne({
      where: {
        admin_code,
      },
    });
    const newConsortium = await db.Consortium.create(body);
    const {
      dataValues: { id },
    } = administrator;
    // newConsortium.setAdminOffice(body.admin_office);
    await newConsortium.addAdministrator(id);
    return newConsortium;
  } catch (err) {
    throw err;
  }
};

export const fetchAllConsortiums = async (query: any) => {
  try {
    const allConsortiumsUser = await db.Administrator.findOne({
      where: {
        id: Number(query.admin_id),
      },
      include: {
        model: db.Consortium,
      }
    });
    let response = await allConsortiumsUser.getConsortia();
    return response;
  } catch (err) {
    return handlerError(err);
  }
};

export const fetchConsortium = async (idConsortium: number) => {
  try {
    const consortium = await db.Consortium.findOne({
      where: {
        id: Number(idConsortium),
      },
    });
    if (!consortium.id) {
      throw {
        message: 'This consortium is not found for user',
        status: 404,
      };
    }
    return consortium;
  } catch (err) {
    return handlerError(err);
  }
};
