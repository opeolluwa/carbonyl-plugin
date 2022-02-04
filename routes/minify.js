const express = require('express');
const router = express.Router()
const { minify } = require('../controllers/minify');
const { isValidUrl } = require("./../middleware")

//POST <base-url>/api/minify
router.post("/minify", isValidUrl, minify)

module.exports = router;