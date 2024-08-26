// backend/routes/studentRoutes.js
const express = require('express');
const {
  viewAssignments,
  viewExams,
  viewAttendance,
  viewAnnouncements,
  StudentLogin,
} = require('../controllers/studentController');
const router = express.Router();

router.post('/login', StudentLogin);
router.get('/assignments', viewAssignments);
router.get('/exams', viewExams);
router.get('/attendance', viewAttendance);
router.get('/announcements', viewAnnouncements);

module.exports = router;
