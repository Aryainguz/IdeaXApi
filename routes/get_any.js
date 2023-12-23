const express = require('express')
const router = express.Router()
const get_any = require('../controllers/get_any')

router.route('/idea').get(get_any)

module.exports = router