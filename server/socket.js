const BitMEXClient = require('bitmex-realtime-api');
// See 'options' reference below
const client = new BitMEXClient({apiKeyID: process.env.BITMEX_APIKEY});


module.exports = {
    client
}