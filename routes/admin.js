const express = require('express')
const router = express.Router();
const Admin = require('../models/admin')

router.get('/', (request, response) => {
    response.end("This is Admin Page")
}) 

router.get('/adminlist', async (request, response) => {
    const admins = await Admin.find();
    response.json(admins)
}) 


router.get('/adminlist/search', async (request, response) => {
    const query = request.query.id
    console.log(query)
    const admins = await Admin.findOne({ adminContact: query }, function (err, adventure) {
        console.log("Error Agaya: " + err)
    });
    response.json(admins)
}) 

router.post('/newadmin', (request, response) => {
    const newAdmin = new Admin({
        adminName : request.body.adminName,
        adminAccess : request.body.adminAccess,
        adminEmail : request.body.adminEmail,
        adminContact: request.body.adminContact
    })    

    newAdmin.save()
    .then((success) => {
        response.json(success);
        response.send("Added user!");
    })
    .catch(err => console.log(err))

})

module.exports = router;