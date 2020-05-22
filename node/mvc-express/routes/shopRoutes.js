const express = require('express');

const productsController = require('../controllers/products');
const router = express.Router();

router.get('/', productsController.getProducts );
router.get('/productos', productsController.getAllProducts);

module.exports = router;