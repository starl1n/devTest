const express = require('express')
const cors = require('cors')
const { client } = require('../socket')
const { db_connection } = require('../database/connect_db')
const { insertdata } = require('../database/insert_data')

class Server{

    constructor(){

        this.app = express()
        this.port = process.env.PORT || '8080'
        this.socketServer = client
        this.paths = {
            coins: '/api/coins',
            test: '/api/test'
        }
        this.middlewares()
        this.connectDb()
        this.serverSocket()
        this.routes()
        
    }

    middlewares(){
        // CORS
        this.app.use( cors() )

        // express render to JSON
        this.app.use( express.json() )
    }

    routes(){
        this.app.use(this.paths.coins, require('../routes/coins.routes')),
        this.app.use(this.paths.test, require('../routes/test.routes'))
    }

    // INICIALIZAMOS LA BASE DE DATOS
    async connectDb(){
        await db_connection()
    }

    // INICIALIZAMOS A CAPTAR LOS DATOS DEL SOCKET Y A GUARDARLOS EN LA BASE DE DATOS
    async serverSocket(){
        await insertdata()
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Server on por ${ this.port }`)
        } )
    }

}

module.exports = Server;