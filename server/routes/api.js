const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/coordinates/:character', apiController.get_coordinates);

router.post('/scores', apiController.set_score);

router.get('/scores/:game', apiController.get_scores);

module.exports = router;