const mongoose = require('mongoose')

const porosiSchema = new mongoose.Schema({
    
    fullName: {
        type: String,
        required: true

    },
    product: {
        type: String,
        required: true
    }
}) 

module.exports = mongoose.model('porosite', porosiSchema)