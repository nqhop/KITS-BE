const { monsters } = require('../database')
function getMonsters (req, res) {
    res.send(monsters)
}

module.exports = {
    getMonsters
}