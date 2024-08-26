// backend/controllers/studentController.js
const Assignment = require('../models/Assignment');
const Exam = require('../models/Exam');
const Attendance = require('../models/Attendance');
const Announcement = require('../models/Announcement');
const Student = require('../models/Student');
const JWT_SECRET = 'ASDV54@DJHDB1654651531#$3434355$#%$#%$'; // Use an environment variable for this in production
const jwt = require('jsonwebtoken');

// View assignments
const viewAssignments = async (req, res) => {
  const {course} = req.query;
  console.log(req)
  console.log(course)
  try {
    // const assignments = await Assignment.find({ student: req.student.id });
    const assignments = await Assignment.find({course});
    console.log(assignments)
    res.status(200).json(assignments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// view exams
const viewExams = async (req, res) => {
  const {course} = req.query;
  console.log(req)
  console.log(course)
  try {
    const exams = await Exam.find({course});
    console.log(exams)
    res.status(200).json(exams);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// View exams
// const viewExams = async (req, res) => {
//   try {
//     const exams = await Exam.find();
//     // const exams = await Exam.find({ course: req.student.course });
//     res.status(200).json(exams);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

const StudentLogin = async (req, res) => {
  const { email, registrationNumber } = req.body;
  
  try {
    const StudentDetail = await Student.find({ registrationNumber:registrationNumber });
    // console.log(StudentDetail);
    if (StudentDetail) {
      const token = jwt.sign({ name: StudentDetail.name}, JWT_SECRET, { expiresIn: '1h' });
      if (StudentDetail && StudentDetail.length > 0) {
        res.json({ token: token, StudentDetail: StudentDetail[0] });
    }
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    res.status(500).send('Error logging in');
  }
};

// View attendance
const viewAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ student: req.student.id });
    res.status(200).json(attendance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// View announcements
const viewAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.status(200).json(announcements);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  viewAssignments,
  viewExams,
  viewAttendance,
  viewAnnouncements,
  StudentLogin,
};
