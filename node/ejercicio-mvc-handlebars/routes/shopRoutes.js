const express = require('express');
const productController = require('../controllers/products');
const router = express.Router();

router.get('/', productController.getProducts);
router.get('/add-product', productController.addProduct);
router.get('/next-id', productController.getNextId);
router.get('/edit-product/:id', productController.addProduct); //1. Editar - completar esta ruta con el controlador que le correspone
router.post('/add-product', productController.saveProduct);
router.post('/delete-product/:id', productController.addProduct); //2. Borrar - Completar esta ruta con el controlador que le correspone

module.exports = router;