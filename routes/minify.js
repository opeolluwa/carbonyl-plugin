const express = require('express');
const cors = require('cors');
const router = express.Router()
const { minify } = require('../controllers/minify');
const { isValidUrl } = require("./../middleware")
router.use(cors())

//POST <base-url>/api/minify
router.post("/minify", isValidUrl, minify)

module.exports = router;