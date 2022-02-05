const { nanoid } = require('nanoid/async'); //nanoid
const { MinifiedUrl } = require('../models');

async function minify(req, res) {
    //Get URL from Payload
    const { url } = req.body;

    //Assign Unique Id to the URL and Store It to Database
    try {
        const shortenedUrlId = await nanoid(8)
        const longUrl = url;
        const baseUrl = 'https://bytes-33.herokuapp.com/';
        const minifiedLink = baseUrl + shortenedUrlId;
        await MinifiedUrl.create({ longUrl, shortenedUrlId })

        //Send Feedback to Client
        res.send({ error: false, minifiedLink })
    } catch (error) {
        res.send({ error: true, message: "An internal error occurred, please try again after some time" })
    }
}

//export module
module.exports = { minify }