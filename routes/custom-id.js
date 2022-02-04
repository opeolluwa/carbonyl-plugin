const express = require('express');
const { customId } = require('../controllers/custom-id');
const router = express.Router()

//POST <base-url>/api/custom-id
router.post("/custom-id", customId)

module.exports = router;