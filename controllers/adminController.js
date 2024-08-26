// backend/controllers/adminController.js
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const Course = require('../models/Course');
const Announcement = require('../models/Announcement');
const Exam = require('../models/Exam');
const Event = require('../models/Event');
const uploadFile = require('../utils/fileUpload');

// Add a new student
const addStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add a new teacher
const addTeacher = async (req, res) => {
  try {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).json(teacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add a new course
const addCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add an announcement with PDF
const addAnnouncement = async (req, res) => {
  try {
    const pdfPath = await uploadFile(req.file);
    const announcement = new Announcement({ ...req.body, pdf: pdfPath });
    await announcement.save();
    res.status(201).json(announcement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add an exam
const addExam = async (req, res) => {
  try {
    const exam = new Exam(req.body);
    await exam.save();
    res.status(201).json(exam);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add an event
const addEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// controllers/authController.js
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const User = require('../models/User');

const JWT_SECRET = 'ASDV54@DJHDB1654651531#$3434355$#%$#%$'; // Use an environment variable for this in production

// Register User
// const register = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, password: hashedPassword });
//     await newUser.save();
//     res.status(201).send('User registered');
//   } catch (error) {
//     res.status(500).send('Error registering user');
//   }
// };

// Login User
const AdminLogin = async (req, res) => {
  const { username, password } = req.body;
  const AdminName = "Admin";
  const AdminPassword = "Admin@123";
  try {
    // const user = await User.findOne({ username });
    if (AdminName == username && AdminPassword == password) {
      const token = jwt.sign({ name: username}, JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    res.status(500).send('Error logging in');
  }
};


module.exports = {
  AdminLogin,
  addStudent,
  addTeacher,
  addCourse,
  addAnnouncement,
  addExam,
  addEvent,
};
