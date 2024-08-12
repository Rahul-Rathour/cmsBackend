import mongoose from 'mongoose';


const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    registrationNumber:{
        type: String,
        required: true,
        unique: true
    },
    course:{
        type: String,
        required: true
    },
    branch:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    father_name:{
        type: String,
        required: true
    },
    mother_name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
});

export const Student = mongoose.model('Student',studentSchema);