import { Student } from "../models/studentSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createStudent  = async (req, res, next) =>{

    console.log(req.body);
    const {name,registrationNumber,course,branch,email,father_name,mother_name,category} = req.body;

    try {
        if (!name || !registrationNumber || !course || !branch || !email || !father_name || !mother_name || !category) {
            handleValidationError("Please fill full form! ", 400);
        }
        await Student.create({name,registrationNumber,course,branch,email,father_name,mother_name,category});
        res.status(200).json({
            success: true,
            message: "Student Created! ",
        });
    } catch (err) {
        next(err);
    }
};

export const getAllStudents = async (req, res, next) => {
    try {
        const students = await Student.find();
        res.status(200).json({
            success: true,
            students,
        });
    } catch (err) {
        next(err);
    }
};