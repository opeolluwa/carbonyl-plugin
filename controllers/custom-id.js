const { MinifiedUrl } = require('../models');

async function customId(req, res) {
    //get keyword and the minified url from request body
    const { keyword, minifiedUrl } = req.body;

    //get the urlId and parse it
    const link = minifiedUrl.split("/")
    const shortenedUrlId = link[link.length - 1]

    try {
        const shortenedUrl = await MinifiedUrl.findOne({ where: { shortenedUrlId } });

        // if no match send error
        if (!shortenedUrl) {
            return res.status(403)
        }

        //else update the url keyword
        shortenedUrl.shortenedUrlId = keyword;
        shortenedUrl.save();
        res.send({ shortenedUrl })

    } catch (error) {
        res.send("An error occurred, pls try again after some time")
    }
}



module.exports = { customId } 