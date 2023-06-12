const { Letter } = require('../models')
const letterSchema = require('../models/letters')

const getLetters = async (req, res)=> {
    //without our Find
    //the server/js does not know what the brands are
    const letters = await Letter.find({})
    res.json(letters)
}

module.exports = {
    getLetters
} 