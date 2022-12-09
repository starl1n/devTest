const { client } = require("../socket")

const Coin  = require('../models/Coin')

const socketServer = client

// AQUI OBTENEMOS LOS DATOS DEL SOCKJET E INSERTAMOS A LA BASE DE DATOS

const insertdata = async() => {

    socketServer.addStream('XBTUSD', 'orderBookL2_25',async(data, symbol, tableName) => {
        if (!data.length) return;
        const quote = data[data.length - 1];  

        try {
            const { id, symbol, side, size, price, timestamp } = quote
            const bit = await new Coin({ transac_id: id, symbol, side, size, price, date: timestamp })

            await bit.save()
            console.log('Data Added!')
            
        } catch (error) {
            console.log(error)
        }
        
      });

}

module.exports = {
    insertdata
}