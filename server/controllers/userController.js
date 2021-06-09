const express = require('express');
const router = express.Router();
router.use(express.json());

const mongoose = require('mongoose');
const User = require('../models/user.js')

const getAllUsers = async (req, res) => {
    const allUsers = await User.find({});
    console.log("All users:", allUsers)

    res.json(allUsers)
}

const addUser = async (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    const savedUser = await user.save();
    console.log("Saved user: ", savedUser)

    res.json({
        message: "User successfuly added!",
        createdUser: user
    })
}

module.exports = { getAllUsers, addUser };