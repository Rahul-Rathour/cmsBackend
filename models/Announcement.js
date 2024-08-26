// backend/models/Announcement.js
const mongoose = require('mongoose');

const announcementSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  pdf: { type: String},
  date: { type: Date, default: Date.now },
});

const Announcement = mongoose.model('Announcement', announcementSchema);
module.exports = Announcement;
