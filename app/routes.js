const studentRoutes = require('./controllers/students')
console.log("1111111111111111111111111111111111111")
module.exports = (app) =>{
    app.use('/api/v1/student', studentRoutes)
}