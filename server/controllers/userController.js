const express = require('express');
const router = express.Router();
router.use(express.json());

const mongoose = require('mongoose');
const UserModel = require('../models/user.js')

class userController {
    constructor(model) {
        this.model = model;
        this.queryResult = null;
    }

    getAllUsers = async (req, res) => {
        this.queryResult = await this.model.find({});
        console.log("All users:", this.queryResult)
    
        res.json(this.queryResult)
    }
    
    addUser = async (req, res) => {
        const user = new this.model({
            _id: new mongoose.Types.ObjectId,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
    
        this.queryResult = await user.save();
        console.log("Saved user: ", this.queryResult)
    
        res.json({
            message: "User successfuly added!",
            createdUser: this.queryResult
        })
    }
    
    findUser = async (req, res) => {
        const user = {
            email: req.body.email,
            password: req.body.password
        }
    
        this.queryResult = await this.model.findOne({
            email: user.email,
            password: user.password
        })
    
        console.log('Found user: ', this.queryResult)

        res.json({
            message: "User found",
            userFound: this.queryResult
        })
    }
}

const controller = new userController(UserModel);

module.exports = { controller };