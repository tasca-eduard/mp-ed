const express = require('express');
const router = express.Router();
router.use(express.json());

const userController = require('../controllers/userController').controller;

router.get('/getUsers', userController.getAllUsers);
router.post('/addUser', userController.addUser)
router.get('/findUser', userController.findUser)

module.exports = router;