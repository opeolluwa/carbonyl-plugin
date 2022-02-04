const express = require('express');
const cors = require('cors');
const { match } = require('../controllers/match');
const router = express.Router()
router.use(cors())

//GET :: minified link
router.get("/:id", match)

module.exports = router;