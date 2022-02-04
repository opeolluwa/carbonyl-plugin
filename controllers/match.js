//import the database model
const { MinifiedUrl } = require('../models');

async function match(req, res) {
    //get minified url id from payload
    const shortenedUrlId = req.params.id;

    //fetch the link with the id form the database
    const shortenedUrl = await MinifiedUrl.findOne({ where: { shortenedUrlId } });

    // send error message if no match is found for the provided link
    if (!shortenedUrl) {
        return res.status(400).send({ error: true, message: "Invalid URL" })
    }

    //else get the actual link and redirect to it
    const actualLink = shortenedUrl.longUrl
    res.redirect(actualLink)
}

//export module
module.exports = { match } 