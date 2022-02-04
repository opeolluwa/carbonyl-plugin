const express = require('express');
const cors = require('cors');
const { customId } = require('../controllers/custom-id');
const router = express.Router()
router.use(cors())
//POST <base-url>/api/custom-id
router.post("/custom-id", customId)

module.exports = router;