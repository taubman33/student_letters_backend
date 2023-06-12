const { Schema } = require('mongoose')

const letterSchema = new Schema(
    {
        initials: {type: String, required: true},
        location: {type: String, required: true},
        letter: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = letterSchema