// backend/models/Exam.js
const mongoose = require('mongoose');

const examSchema = mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  // course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  course: {type: String, required: true}
});

const Exam = mongoose.model('Exam', examSchema);
module.exports = Exam;
