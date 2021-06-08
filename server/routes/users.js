const express = require('express');
const router = express.Router();
const server = express();
router.use(express.json());

const mongoose = require('mongoose');
const User = require('../models/user.js')

router.get('/getUsers', async (req, res) => {
    const allUsers = await User.find({});
    res.send(allUsers)
})

router.post('/addUser', async (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    const queryStatus = await user.save();
    
    res.status(200).json({
        message: "User successfuly added!",
        createdUser: user
    })
})

module.exports = router;