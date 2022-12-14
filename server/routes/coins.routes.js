const { Router } = require("express");
const { get_all_coins, get_coins_id, get_coins_transac_id, find_by_date } = require("../controllers/coins.controller");

const router = Router()


router.get('/', get_all_coins)

router.get('/:id', get_coins_id)

router.get('/transac_id/:id', get_coins_transac_id)

router.get('/find_date', find_by_date)

router.post('ping', (req, res) => {
    res.send('pong')
})

console.log('hello')
module.exports = router;