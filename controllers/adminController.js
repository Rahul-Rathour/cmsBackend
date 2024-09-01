// backend/controllers/adminController.js
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const Course = require('../models/Course');
const Announcement = require('../models/Announcement');
const Exam = require('../models/Exam');
const Event = require('../models/Event');
const uploadFile = require('../utils/fileUpload');
require('dotenv').config();

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
    const { title, description } = req.body;
    const pdf = req.file ? req.file.filename : null;

    const newAnnouncement = new Announcement({
      title,
      description,
      pdf
    });

    await newAnnouncement.save();
    res.status(201).json({ message: 'Announcement created successfully', announcement: newAnnouncement });
  }
  catch (error) {
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

const JWT_SECRET = process.env.JWT_SECRET;  // Use an environment variable for this in production

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
    if (username == AdminName && password == AdminPassword) {
      const token = jwt.sign({ name: username }, JWT_SECRET, { expiresIn: '1h' });
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
