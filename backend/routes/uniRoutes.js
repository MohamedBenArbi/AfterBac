const express = require('express')
const { getuni ,getUniByScore } = require('../controllers/uniControllers')
const router = express.Router()


router.get('/:section',getuni)
router.get('/:score',getUniByScore)

module.exports = router