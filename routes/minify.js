const express = require('express');
const router = express.Router()
const { minify } = require('../controllers/minify');
const { isValidUrl } = require("./../middleware")

router.post("/minify", isValidUrl, minify)

module.exports = router;