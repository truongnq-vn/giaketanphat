const express = require('express');
const router = express.Router();

const tintucController = require('../app/controllers/tintucController');

router.get('/:slug', tintucController.show);
router.get('/', tintucController.index);


module.exports = router;
