const express = require('express')
const router = express.Router()
const talk_mentor = require('../controllers/talk_mentor')

router.route('/idea/talkmentor').get(talk_mentor)

module.exports = router