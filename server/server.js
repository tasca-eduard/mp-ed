const express = require('express');
const server = express();
const mongoose = require('mongoose');

const userRoutes = require('./routes/users.js');

mongoose.connect('mongodb+srv://edco:Seventosix34@cluster0.nkuas.mongodb.net/test?authSource=admin&replicaSet=atlas-lzfj2o-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

server.listen(4000, () => {
    console.log("Server is running at port 4000")
})

server.use('/users', userRoutes);



