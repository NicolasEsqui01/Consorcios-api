import { Request, Response } from 'express';
import { fetchOffices, addOffice } from '../services/office.services';

export const fetchAllOffice = async (req: Request, res: Response) => {
  try {
    const allOffice = await fetchOffices(req.query);
    res.status(200).json(allOffice);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

export const newAdminOffice = async (req: Request, res: Response) => {
  try {
    const { cuit, fiscal_status, address, phone, payment_cbu, payment_alias, payment_account_num, payment_bank, payment_holder, head_admin } =
      req.body;
    if (
      cuit &&
      fiscal_status &&
      address &&
      phone &&
      payment_cbu &&
      payment_alias &&
      payment_account_num &&
      payment_bank &&
      payment_holder &&
      head_admin
    ) {
      const office = await addOffice(req.body);
      res.status(200).json(office);
    } else {
      res.status(400).json({ message: 'You need to fill in the fields' });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
