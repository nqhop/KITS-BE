const { players } = require('../database')
function getPlayers(req, res) {
    // console.log(players)
    res.send(players)
}

function getPlayerByName(req, res) {
    const { playerName } = req.params;
    // console.log("playerName:-", playerName.trim(),'-')
    for (let player of players) {
        if (player.name == playerName) {
            return res.send(player)
        }
    }
    res.send('not found')
}

function addPlayer(req, res) {
    const { name } = req.body;
    console.log(name)
}

module.exports = {
    getPlayers,
    getPlayerByName,
    addPlayer
}

// add: req.body, status use 3 ..; hande two players has the same name -> use middware

// delete: use filter, have to asign new array to old arr and effect to perfoment. => use onother method
// use splice