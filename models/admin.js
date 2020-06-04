const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    adminName : String,
    adminAccess : String,
    adminEmail : String,
    adminContact: String
})

module.exports = mongoose.model('admins', adminSchema)