const express = require('express');
const router = express.Router();
const sendingCode = require('../controllers/emailVerification-controller');


router.route('/verification/:code').post(sendingCode)

module.exports = router