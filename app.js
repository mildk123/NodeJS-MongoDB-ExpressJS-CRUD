const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
require('dotenv/config');


app.use(bodyParser.json())


// Import Routes
const usersRoutes  = require('./routes/users');
const adminRoutes  = require('./routes/admin')


// Middlewares (Function called upon request of routes )
app.use("/users" , usersRoutes )
app.use("/admins" , adminRoutes )


// Connect To DB
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_connection, { useUnifiedTopology: true, useNewUrlParser: true, } , () => console.log('DB connected'))


// Routes
app.get('/', (request, response) => {
    response.end("Home Page")
}) 

// Starts the server on a specific route
app.listen(port, function() {
    console.log("SERVER BOOTED UP")
})