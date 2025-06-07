const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  studentrollno: { type: Number, required: false },  // Capital N for Number
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },  // Phone number as string is okay
  gender: { type: String, required: true },
  income: { type: Number, required: true },
  employment: { type: String, required: false },
  caste: { type: String, required: true },
  attendance: { type: Number, default: 0 },
  grades: {
    math: { type: Number },
    science: { type: Number },
    english: { type: Number }
  }
});

module.exports = mongoose.model('Student', studentSchema);
