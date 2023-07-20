const express = require('express')
const router = express.Router()
const studentController = require('./students.controller')
console.log("222222222222222222222222222222222222222")
router.get('/get', studentController.getAllStudents)

module.exports = router