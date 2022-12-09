const { Schema, model } = require('mongoose');

// ESTE ES EL ESQUEMA DE MONGODB, EN ESTE ORDEN SE GUARDARAN LOS DATOS

const Coin = Schema({
    transac_id:{
        type: Number,
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


module.exports = model('Coin', Coin)