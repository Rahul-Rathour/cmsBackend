const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  course: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    // ref: 'Course',
    required: true,
  },
  teacher: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    // ref: 'Teacher',
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
