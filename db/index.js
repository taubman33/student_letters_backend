const mongoose = require('mongoose')

mongoose
  .connect('mongodb+srv://taubman33:mH2jpzRdkOU22m2m@cluster0.dhpgmeb.mongodb.net/')
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
  
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db