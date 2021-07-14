const express = require('express');
const router = express.Router();

const hotroController = require('../app/controllers/hotroController');

router.get('/', hotroController.index);


module.exports = router;
