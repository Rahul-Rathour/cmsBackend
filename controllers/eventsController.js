import { Events } from "../models/eventsSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createEvents  = async (req, res, next) =>{

    console.log(req.body);
    const {events} = req.body;

    try {
        if (!events) {
            handleValidationError("Please fill full form! ", 400);
        }
        await Events.create({events});
        res.status(200).json({
            success: true,
            message: "Event Created! ",
        });
    } catch (err) {
        next(err);
    }
};

export const getAllEvents = async (req, res, next) => {
    try {
        const events = await Events.find();
        res.status(200).json({
            success: true,
            events,
        });
    } catch (err) {
        next(err);
    }
};