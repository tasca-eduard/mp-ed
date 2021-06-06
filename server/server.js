const express = require('express');
const server = express();
const mongoose = require('mongoose');
const User = require('./models/user')

mongoose.connect('mongodb+srv://edco:Seventosix34@cluster0.nkuas.mongodb.net/test?authSource=admin&replicaSet=atlas-lzfj2o-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

server.use(express.json());

server.listen(4000, () => {
    console.log("Server is running at port 4000")
})

server.get('/getUsers', (req, res) => {
    User.find({}, (err, users) => {
        res.send(users)
    })
})

server.post('/addUser', (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    user.save().then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err)
    })

    res.status(200).json({
        message: "User successfuly added!",
        createdUser: user
    })
})

server.get('/addUser', (req, res) => {

})
