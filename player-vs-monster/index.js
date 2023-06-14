const express = require('express')
const app = express()
const port = 3001

const playerRouter = require('./routes/players')
const monsters = require('./routes/monsters')

app.use('/', playerRouter)
app.use('/', monsters)

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})