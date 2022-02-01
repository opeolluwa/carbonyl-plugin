module.exports = {
    isValidUlr: (req, res, next) => {
        const { url } = req.body;
        //if no url id provided or url is invalid
        if (!url) {
            res.send("Invalid URL detected")
        }

    }
}