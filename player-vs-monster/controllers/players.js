const { players } = require('../database')
function getPlayers(req, res) {
    // console.log(players)
    res.send(players)
}

function getPlayerByName(req, res) {
    const { playerName } = req.params;
    console.log("playerName:-", playerName.trim(),'-')
    for (let player of players) {
        console.log(player)
        if (player.name == playerName) {
            console.log('player.name ', player.name)

            return res.send(player)
        }
    }
}
module.exports = {
    getPlayers,
    getPlayerByName
}

// add: req.body, status use 3 ..; hande two players has the same name -> use middware
// delete: use filter, have to asign new array to old arr and effect to perfoment. => use onother method