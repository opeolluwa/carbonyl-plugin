module.exports = {
    isValidUrl: (req, res, next) => {
        const { url } = req.body;
        // if no url id provided or url is invalid
        if (!url) {
           return res.send("Invalid URL detected")
        }
        next();
    }
}