const express = require('express');
const { customId } = require('../controllers/custom-id');
const router = express.Router()

router.post("/custom-id", customId)

module.exports = router;