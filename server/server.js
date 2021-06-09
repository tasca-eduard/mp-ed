const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes.js');

mongoose.connect('mongodb+srv://edco:Seventosix34@cluster0.nkuas.mongodb.net/test?authSource=admin&replicaSet=atlas-lzfj2o-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.listen(4000, () => {
    console.log("Server is running at port 4000")
})

app.use('/users', userRoutes);



