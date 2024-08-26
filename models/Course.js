// backend/models/Course.js
const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  title: { type: String, required: true },
  code: {type: String},
  description: { type: String },
  // teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
