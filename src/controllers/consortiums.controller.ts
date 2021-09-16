import { Request, Response } from "express";
import {
  createConsortium,
  fetchAllConsortiums,
  fetchConsortium,
} from "../services/consortiums.services";
export const addConsortium = async (req: any, res: Response) => {
  try {
    const { admin_code } = req.user;
    // const { } = req.body;
    const newConsortium = await createConsortium({...req.body, admin_code});
    return res.status(200).json(newConsortium);
  } catch (err) {
    // if (res.message) res.status(err.status).json(res.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/*export const modifyConsortium = async (req: any, res: any, next: any) => {
  try {
    const newConsortium = await updateConsortium(req.body);
    res.status(200).json(newConsortium);
  } catch (err) {
    if (res.message) res.status(err.status).json(res.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
*/
export const findConsortiums = async (req: any, res: any, next: any) => {
  try {
    const newConsortium = await fetchAllConsortiums(req.query);
    res.status(200).json(newConsortium);
  } catch (err) {
    if (res.message) res.status(err.status).json(res.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const findConsortium = async (req: any, res: any, next: any) => {
  try {
    const newConsortium = await fetchConsortium(req.params.id);
    res.status(200).json(newConsortium);
  } catch (err) {
    if (res.message) res.status(err.status).json(res.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
