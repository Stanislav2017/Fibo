const express = require('express');
const router = express.Router();
const MainController = require('../controllers/MainController');

router.get('/', MainController.index);

router.post('/find-fibo', MainController.findFibo);

module.exports = router;