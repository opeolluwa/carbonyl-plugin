const express = require('express');
const { match } = require('../controllers/match');
const router = express.Router()

//GET :: minified link
router.get("/:id", match)

module.exports = router;