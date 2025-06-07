const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/controllers');

// Add a new student
router.post('/add', studentController.addStudent);

// GET - Get all students
router.get('/', studentController.getAllStudents);

// GET - Get student by name and studentId (query params)
// Must come BEFORE '/:id' to avoid conflict
router.get('/find', studentController.getStudentByNameAndId);

// DELETE - Delete student by name and studentId (query params)
router.delete('/remove', studentController.deleteStudentByNameAndId);

// GET - Get a student by studentId (use studentId in place of MongoDB _id)
router.get('/:id', studentController.getStudentById);

// PATCH - Update a student by studentId
router.patch('/:id', studentController.updateStudent);

// DELETE - Delete a student by studentId
// Change method name to match controller export: deleteStudent (not deleteStudentid)
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
