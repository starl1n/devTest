
const Coin = require("../models/Coin")



const get_all_coins = async(req, res) => {

    const { from } = req.query;




    try {
        
        const coins = await Coin.find().skip(from).limit(100)

        res.json(coins)

    } catch (error) {
        res.status(500).json(error)
    }

}

const get_coins_id = async(req, res) => {

    const { id } = req.params

    try {
        
        const coin = await Coin.findById( id )

        res.json(coin)
    } catch (error) {
        return res.status(500).json(error)
    }

}

const get_coins_transac_id = async(req, res) => {

    const { transac_id } = req.params;
    const query = { transac_id: Number(transac_id) }

    try {
        
        const coins = await Coin.find(transac_id)

        res.json(coins)

    } catch (error) {
        return res.status(500).json(error)
    }   
    
}

const find_by_date = async(req, res) => {

    const { date } = req.body;

    const query = { date: date }

    try {
        
        const coins = await Coin.find(query)

        res.json(coins)

    } catch (error) {
        return res.status(500).json(error)
    }

}



module.exports = {
    get_all_coins,
    get_coins_id,
    get_coins_transac_id,
    find_by_date
}