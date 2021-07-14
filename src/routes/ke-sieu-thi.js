const express = require('express');
const router = express.Router();

const kesieuthiController = require('../app/controllers/kesieuthiController');

router.get('/:slug', kesieuthiController.show);
router.get('/', kesieuthiController.index);


module.exports = router;
