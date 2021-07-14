const express = require('express');
const router = express.Router();

const KekhohangController = require('../app/controllers/kekhohangController');

router.get('/:slug', KekhohangController.show);
router.post('/:slug', KekhohangController.show);
router.get('/', KekhohangController.index);


module.exports = router;
