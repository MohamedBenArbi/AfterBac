const express = require('express')
const { getuni } = require('../controllers/uniControllers')
const router = express.Router()


router.get('/',getuni)

module.exports = router