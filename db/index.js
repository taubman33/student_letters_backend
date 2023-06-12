const mongoose = require('mongoose')

const pw = "ejIvUpgOimJyQsCz"
mongoose
  .connect(`mongodb+srv://taubman33:${pw}@cluster0.dhpgmeb.mongodb.net/lettersDatabase?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
  
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db