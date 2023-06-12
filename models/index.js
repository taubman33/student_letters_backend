const mongoose = require('mongoose')
const letterSchema = require('./letters')

const Letter = mongoose.model('Letter',letterSchema)

module.exports = {
   Letter
}