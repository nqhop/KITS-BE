const express = require('express')
const router = express.Router()

const monsterController = require('../controllers/monsters')

//get all monsters
router.get('/monsters', monsterController.getMonsters);

module.exports = router;