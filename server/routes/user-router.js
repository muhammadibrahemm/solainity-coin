const express = require('express');
const router = express.Router();
const authController = require('../controllers/user-controller');

router.route('/register').post(authController.registeration);
router.route('/login').post(authController.login)
router.route('/get-all-user-data').post(authController.fetchUserDataFromJWTToken);

module.exports = router