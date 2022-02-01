function minify(req, res) {
    const { url } = req.body;

    res.send(url)
}



module.exports = { minify }