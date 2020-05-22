const Product = require('../models/product');

getProducts = (req, res) => {
    res.send('<h1>Todos los productos</h1>');
}

getAllProducts = (req, res) => {    
    let producto = new Product("", "", "", "");
    producto.getAllProducts();
    res.send('<h1>Productos destacados</h1>');
}

module.exports = {
    getAllProducts,
    getProducts    
}