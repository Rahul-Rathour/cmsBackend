// backend/controllers/teacherController.js
const Assignment = require('../models/Assignment');
const Exam = require('../models/Exam');
const Attendance = require('../models/Attendance');
const Announcement = require('../models/Announcement');
const Course = require('../models/Course');
const Student = require('../models/Student')

// View courses
const viewCourses = async (req, res) => {
  try {
    // const courses = await Course.find({ teacher: req.teacher.id });
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// view students
const viewStudents = async (req, res) => {
  try {
    // const courses = await Course.find({ teacher: req.teacher.id });
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add assignment
const addAssignment = async (req, res) => {
  try {
    const assignment = new Assignment(req.body);
    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Add Exams
const addExams = async (req, res) => {
  try {
    const exams = new Exam(req.body);
    await exams.save();
    res.status(201).json(exams);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Manage exams
const manageExams = async (req, res) => {
  try {
    // const exams = await Exam.find({ course: req.teacher.course });
    const exams = await Exam.find();
    res.status(200).json(exams);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mark attendance
const markAttendance = async (req, res) => {
  try {
    const attendance = new Attendance(req.body);
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Manage announcements
const manageAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find({ teacher: req.teacher.id });
    res.status(200).json(announcements);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  viewCourses,
  viewStudents,
  addExams,
  addAssignment,
  manageExams,
  markAttendance,
  manageAnnouncements,
};
