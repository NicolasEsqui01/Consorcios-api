"use strict";
import { Request, Response } from "express";
import { createSubscription, allSubscription } from "../services/subscription.services";


const addSubscription = async (req: Request, res: Response) => {
    // try {
    //     const subscription = await createSubscription();
    //     return res.status(200).json({
    //         type: subscription.type,
    //         message: subscription.message,
    //     })
    // } catch (err) {
    //     return res.status(err.status).json({
    //         type: err.type,
    //         message: err.message,
    //     })
    // }
};

const searchAllSub = async (req: Request, res: Response) => {

};



export { addSubscription };