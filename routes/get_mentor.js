const express = require('express')
const router = express.Router()
const get_mentor = require('../controllers/get_mentor')

router.route('/idea/mentor').get(get_mentor)

module.exports = router