const express = require('express')
const router = express.Router()
const get_index = require('../controllers/get_index')

router.route('/').get(get_index)

module.exports = router