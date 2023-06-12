const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()
const letterController = require('./controllers/letterController')

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {console.log(`express server running on port ${PORT}`)})

app.get('/', (req,res) => { res.send('this is our landing page')})

app.get('/api/letters', letterController.getLetters)


