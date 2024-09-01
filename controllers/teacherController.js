// backend/controllers/teacherController.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'ASDV54@DJHDB1654651531#$3434355$#%$#%$'; 
const Assignment = require('../models/Assignment');
const Exam = require('../models/Exam');
const Attendance = require('../models/Attendance');
const Announcement = require('../models/Announcement');
const Course = require('../models/Course');
const faculty = require('../models/Teacher')


const FacultyLogin = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const FacultyDetail = await faculty.find({ empid:password });
    // console.log(FacultyDetail);
    if (FacultyDetail) {
      const token = jwt.sign({ name: FacultyDetail.name}, JWT_SECRET, { expiresIn: '1h' });
      if (FacultyDetail && FacultyDetail.length > 0) {
        res.json({ token: token, FacultyDetail: FacultyDetail[0] });
    }
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    res.status(500).send('Error logging in');
  }
};

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

// Create a new Announcement
const createAnnouncement = async (req, res) => {
  const { title, description, pdf } = req.body;

  try {
    const newAnnouncement = new Announcement({
      title,
      description,
      pdf,
      teacher: req.teacher.id, // Assuming the schema has a `teacher` field to store the teacher's ID
    });

    await newAnnouncement.save();
    res.status(201).json({ success: true, announcement: newAnnouncement });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
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
  FacultyLogin,
};
