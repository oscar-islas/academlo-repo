const express = require('express');
const productController = require('../controllers/products');
const router = express.Router();

router.get('/', productController.getProducts);
router.get('/add-product', productController.addProduct);
router.get('/edit-product/:id', productController.postEditProduct); 
router.post('/edit-product/:id', productController.updateProduct); 
router.post('/add-product', productController.saveProduct);
router.post('/delete-product/:id', productController.postDeleteProduct); 
router.get('/detail-product/:id', productController.getProductDetail);
router.get('/search', productController.getProductsByS);
/* 3. Agregar una ruta que pueda mostrar el detalle del producto, 
 *  pueden tomar como referencia el siguiente 
 *  template para crear la vista https://startbootstrap.com/templates/shop-item/ 
*/

//4. Agregar la ruta para mostrar todas las coincidencias para el producto buscado


module.exports = router;