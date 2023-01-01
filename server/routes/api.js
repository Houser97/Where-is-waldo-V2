const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/get_coordinates/:character', apiController.get_coordinates);

router.post('/register_score', apiController.set_score);

module.exports = router;