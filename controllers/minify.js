const { nanoid } = require('nanoid/async'); //nanoid
const { MinifiedUrl } = require('../models');

async function minify(req, res) {
    //get rl from payload
    const { url } = req.body;

    //assign unique id to the url and store it to database
    try {
        const shortenedUrlId = await nanoid(8)
        const longUrl = url;
        const baseUrl = 'https://minifier.mdbgo.io/';
        const minifiedLink = baseUrl + shortenedUrlId;
        await MinifiedUrl.create({ longUrl, shortenedUrlId })

        //send feedback to client
        res.send({ error: false, minifiedLink })
    } catch (error) {
        res.send({ error: true, message: "An internal error occurred, please try again after some time" })
    }
}



module.exports = { minify }