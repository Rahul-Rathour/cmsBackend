// backend/routes/adminRoutes.js
const express = require('express');
const {
  addStudent,
  addTeacher,
  addCourse,
  addAnnouncement,
  addExam,
  addEvent,
  AdminLogin,
} = require('../controllers/adminController');
const upload = require('../middleware/uploadMiddleware');
const router = express.Router();

router.post('/login', AdminLogin);
router.post('/add-student', addStudent);
router.post('/add-teacher', addTeacher);
router.post('/add-course', addCourse);
router.post('/add-announcement', upload.single('pdf'), addAnnouncement);
router.post('/add-exam', addExam);
router.post('/add-event', addEvent);

module.exports = router;
