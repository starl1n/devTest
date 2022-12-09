const mongoose = require('mongoose');


const db_connection = async() => {

    try {
        
        await mongoose.connect(process.env.MONGO_CONNETTION, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        })
        console.log('Database Online')
    } catch (error) {
        throw new Error('Database not work')
    }

}

module.exports = {
    db_connection
}