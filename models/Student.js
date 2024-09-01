// backend/models/Student.js
const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  registrationNumber: { type: String, required: true, unique: true },
  course: { type: String, required: true },
  branch: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  father_name: { type: String, required: true },
  mother_name: { type: String, required: true },
  category: { type: String, required: true }, 
});

const Student = mongoose.model('Student', studentSchema); 
module.exports = Student;
