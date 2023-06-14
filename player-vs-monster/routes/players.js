const express = require('express')
const router = express.Router();

const playerControllers = require('../controllers/players')

// get all players
router.get('/players', playerControllers.getPlayers);

//get player by name
router.get('/players/:playerName', playerControllers.getPlayerByName)

module.exports = router;