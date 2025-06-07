const Student = require('../models/UserSchema');

// Add a new student (same as before)
exports.addStudent = async (req, res) => {
  try {
    const {
      studentId,
      name,
      email,
      number,
      gender,
      income,
      employment,
      caste,
      grades
    } = req.body;

    if (!studentId || !name || !email || !number || !gender || !income || !employment || !caste) {
      return res.status(400).json({ message: 'All required fields must be filled' });
    }

    const existing = await Student.findOne({ studentId });
    if (existing) {
      return res.status(409).json({ message: 'Student with this ID already exists' });
    }

    const newStudent = new Student({
      studentId,
      name,
      email,
      number,
      gender,
      income,
      employment,
      caste,
      grades
    });

    await newStudent.save();
    res.status(201).json({ message: 'Student added successfully', student: newStudent });
  } catch (error) {
    console.error("Error in addStudent route:", error);
    res.status(500).json({ message: 'Server error while adding student' });
  }
};

// Get all students (same as before)
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ message: 'Students retrieved successfully', students });
  } catch (error) {
    console.error("Error in getAllStudents route:", error);
    res.status(500).json({ message: 'Server error while retrieving students' });
  }
};

// Get a single student by studentId
exports.getStudentById = async (req, res) => {
  try {
    const { id: studentId } = req.params;  // use studentId param

    const student = await Student.findOne({ studentId });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({ message: 'Student retrieved successfully', student });
  } catch (error) {
    console.error("Error in getStudentById route:", error);
    res.status(500).json({ message: 'Server error while retrieving student' });
  }
};

// Update a student by studentId
exports.updateStudent = async (req, res) => {
  try {
    const { id: studentId } = req.params;

    const student = await Student.findOne({ studentId });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const updatedData = req.body;

    const updatedStudent = await Student.findOneAndUpdate(
      { studentId },
      updatedData,
      { new: true, runValidators: true }
    );

    res.status(200).json({ message: 'Student updated successfully', student: updatedStudent });
  } catch (error) {
    console.error("Error in updateStudent route:", error);
    res.status(500).json({ message: 'Server error while updating student' });
  }
};

// Delete a student by studentId
exports.deleteStudent = async (req, res) => {
  try {
    const { id: studentId } = req.params;

    const student = await Student.findOne({ studentId });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    await Student.findOneAndDelete({ studentId });
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error("Error in deleteStudent route:", error);
    res.status(500).json({ message: 'Server error while deleting student' });
  }
};

// Get student by name and studentId (same as before)
exports.getStudentByNameAndId = async (req, res) => {
  try {
    const { name, studentId } = req.query;

    if (!name || !studentId) {
      return res.status(400).json({ message: 'Name and studentId are required' });
    }

    const student = await Student.findOne({ name, studentId });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error("Error in getStudentByNameAndId route:", error);
    res.status(500).json({ message: 'Server error while retrieving student' });
  }
};

// Delete student by name and studentId (same as before)
exports.deleteStudentByNameAndId = async (req, res) => {
  try {
    const { name, studentId } = req.query;

    if (!name || !studentId) {
      return res.status(400).json({ message: 'Name and studentId are required' });
    }

    const deleted = await Student.findOneAndDelete({ name, studentId });

    if (!deleted) {
      return res.status(404).json({ message: 'Student not found or already deleted' });
    }

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error("Error in deleteStudentByNameAndId route:", error);
    res.status(500).json({ message: 'Server error while deleting student' });
  }
};
