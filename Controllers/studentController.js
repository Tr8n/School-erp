// const Student = require('../models/UserSchema');

// // ✅ Add a student
// exports.addStudent = async (req, res) => {
//     try {
//         const student = new Student(req.body);
//         await student.save();
//         console.log('Student added:', student); // Corrected Console → console
//         res.status(201).json({ message: 'Student added', student });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// // ✅ Update a student
// exports.updateStudent = async (req, res) => {
//     try {
//         const updatedStudent = await Student.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             { new: true, runValidators: true }
//         );
//         if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });

//         console.log('Student updated:', updatedStudent);
//         res.json({ message: 'Student updated', updatedStudent });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// // ✅ Delete a student
// exports.deleteStudent = async (req, res) => {
//     try {
//         const deletedStudent = await Student.findByIdAndDelete(req.params.id);
//         if (!deletedStudent) return res.status(404).json({ message: 'Student not found' });

//         console.log('Student deleted:', deletedStudent);
//         res.json({ message: 'Student deleted', deletedStudent });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// // ✅ Get all students
// exports.getAllStudents = async (req, res) => {
//     try {
//         const students = await Student.find();
//         res.json(students);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // ✅ Get single student by ID
// exports.getStudent = async (req, res) => {
//     try {
//         const student = await Student.findById(req.params.id);
//         if (!student) return res.status(404).json({ message: 'Student not found' });

//         res.json(student);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
