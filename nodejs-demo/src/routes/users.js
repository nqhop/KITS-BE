const express = require('express')
const router = express.Router();

const userControllers = require('../controllers/users');

router.get('/get-all-users', userControllers.getAllUsers)
router.get('/get-user-by-name-and-age', userControllers.getUserByNameAndAge)

// create user
router.post('/create-user', userControllers.createUser)

// create many users
router.post('/create-many-user', userControllers.createManyUser)

module.exports = router;