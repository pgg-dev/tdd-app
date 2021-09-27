const express = require('express');
const router = express.Router();
const prodectController = require('./controller/products')

router.get('/', prodectController.products);

module.exports = router;