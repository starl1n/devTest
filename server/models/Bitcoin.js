
const { Schema, model } = require('mongoose');

const BitcoinSchema = Schema({
    transac_id:{
        type: String,
        required: [true, 'The id is required'],
    },
    symbol:{
        type: String,
        required: true
    },
    side: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    date:{
        type: String,
        required: true
    }
})


module.exports = model('Bitcoin', BitcoinSchema)