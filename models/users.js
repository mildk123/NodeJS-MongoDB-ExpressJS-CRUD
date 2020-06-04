const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    age : String,
    height: String,
    dob : String,
    email : String,
})

module.exports = mongoose.model('users', userSchema)