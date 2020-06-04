const express = require('express')
const router = express.Router(); 
const User = require('../models/users');

router.get('/', (request, response) => {
    response.end("This is users Page")
}) 

router.get('/:id', (request, response) => {
    var id = request.params.id
    response.end("USER ID IS: " + id)
}) 

// Creates a user
router.post('/newuser' , (request, response) => {
    const user = new User({
         username: request.body.username,
         age : request.body.age,
         height:  request.body.height,
         dob : request.body.dob,
         email: request.body.email
    })
     user.save()
     .then(done => {
        response.json(done);
        response.send("Added user!");
     })
     .catch(err => console.log("Error occured" + err))
});

// Delete a user
router.delete('/delete/:userID' , async (request, response) => {
    try {
        const deleteUser = await User.remove({_id: request.params.userID})
        response.json(deleteUser)
    }
    catch (err){    
        response.json({message : err});
    }
})

// Update
router.patch('/update' , async (request, response) => {
    try {
        const updatePost = await User.updateOne({_id: request.query.userID}, {$set: {username : request.query.newName  }})
        response.json(deleteUser)
    }
    catch (err){    
        response.json({message : err});
    }
})

module.exports = router;