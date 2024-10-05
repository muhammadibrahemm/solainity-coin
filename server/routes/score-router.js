const express = require('express');
const router = express.Router();
const scoreController = require('../controllers/score-controller'); // Ensure this points to the correct controller file

// Define the route for updating scores using PUT method
router.route('/update-score').put(scoreController);

module.exports = router; // Export the router for use in the main application
