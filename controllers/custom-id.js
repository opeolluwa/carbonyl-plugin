const { MinifiedUrl } = require('../models');

async function customId(req, res) {
    //get keyword and the minified url from request body
    const { keyword, minifiedUrl } = req.body;

    //get the urlId and parse it
    const link = minifiedUrl.split("/")
    const shortenedUrlId = link[link.length - 1]


    //reject keyword longer than 25 characters in length
    if (keyword.length > 25) {
        return res.send({ error: true, message: "keyword too long, consider using words not up to 25 characters in length" })
    }

    try {
        //fetch data associated with the provided id send error if no match
        const shortenedUrl = await MinifiedUrl.findOne({ where: { shortenedUrlId } });
        if (!shortenedUrl) {
            return res.status(400).send({ error: true, message: "url not found" })
        }

        //if keyword already exist, send error
        const isUniqueId = await MinifiedUrl.findOne({ where: { shortenedUrlId: keyword } });
        if (isUniqueId) {
            return res.status(403).send({ error: true, message: "keyword exist, please consider using another keyword" })
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