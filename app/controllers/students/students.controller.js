const studentService = require('../../services/students')

const getAllStudents = (req, res) =>{
    const students = studentService.getAllStudents()
    console.log("students>>>>>>>>>>", students)
    res.send(students)
}

module.exports = {
    getAllStudents
}