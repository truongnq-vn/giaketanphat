const express = require('express');
const router = express.Router();

const thietbisieuthiController = require('../app/controllers/thietbisieuthiController');

router.get('/:slug', thietbisieuthiController.show);
router.get('/', thietbisieuthiController.index);


module.exports = router;
