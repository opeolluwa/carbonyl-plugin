const { MinifiedUrl } = require('../models');

async function match(req, res) {
    //get minified url id from payload
    //<baseurl>/url-id //https://m.t/khfklam
    const shortenedUrlId = req.params.id;
    const shortenedUrl = await MinifiedUrl.findOne({ where: { shortenedUrlId } })
    const actualLink = shortenedUrl.longUrl
    res.redirect(actualLink)
}

module.exports = { match } 