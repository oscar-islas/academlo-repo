import express from 'express';
import productCtrl from '../controllers/products';

const router = express.Router();

router.get('/', productCtrl.getProducts);
router.get('/add-product', productCtrl.addProduct);
router.get('/edit-product/:id', productCtrl.postEditProduct); 
router.post('/edit-product/:id', productCtrl.updateProduct); 
router.post('/add-product', productCtrl.saveProduct);
router.post('/delete-product/:id', productCtrl.postDeleteProduct); 
router.get('/detail-product/:id', productCtrl.getProductDetail);
router.get('/search', productCtrl.getProductsByS);


export default router;