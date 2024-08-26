// backend/routes/teacherRoutes.js
const express = require('express');
const {
  viewCourses,
  viewStudents,
  addAssignment,
  manageExams,
  markAttendance,
  manageAnnouncements,
  addExams,
} = require('../controllers/teacherController');
const router = express.Router();

router.get('/courses', viewCourses);
router.get('/students', viewStudents);
router.post('/add-assignment', addAssignment);
router.get('/exams', manageExams);
router.get('/add-exam', addExams);
router.post('/mark-attendance', markAttendance);
router.get('/announcements', manageAnnouncements);

module.exports = router;
