const { nanoid } = require('nanoid/async'); //nanoid
const { MinifiedUrl } = require('../models');

async function minify(req, res) {
    //get rl from payload
    const { url } = req.body;

    //assign unique id to the url and store it to database
    try {
        
        const uuid = await nanoid(8)
        const longUrl = url;
        const shortenedUrl = 'https://minifier.mdbgo.io/' + uuid
        await MinifiedUrl.create({ longUrl, shortenedUrl })

        //send feedback to client
        res.send({ error: false, uuid, url })
    } catch (error) {
        res.send({ error: true, message: "An internal error occurred, please try again after some time" })
    }
}



module.exports = { minify }