const Product = require('../models/product');
const path = require('path');
const product = require('../models/product');
const shop = require('../models/shop');

const getProducts = async (req, res) => {
    try{
        let products = await shop.getAll();
        res.render('home', {pageTitle: "Inicio | Bienvenida", products: products });
    }catch(e){
        console.log(e);
    }
};

const addProduct = (req, res) => {
    console.log(req.params.id); //Para obtener el parametro que viene con la url
    res.render('add-product', {pageTitle: "Agregar Producto"});
}

const saveProduct = async (req, res) => {
    let id = await shop.nextId();
    let {name, price, description, imgUrl, category} = req.body;
    let nuevoProducto = new product(id, name, price, category, description, imgUrl);
    let correcto = await shop.saveProduct(nuevoProducto);
    if(correcto){
        res.redirect('/');
    }
}

const getNextId = async (req, res) => {
    let id = await shop.nextId();
    res.send(`<h1>${id}</h1>`);
}

const postEditProduct = (req, res) => {
    //5. Llamar al método que permita editar el producto y al final redireccionar a home 
}

const postDeleteProduct = (req, res) => {
    //6. Llamar al método que permita borrar el producto y al final redireccionar a home 
}

module.exports = {
    getProducts,
    addProduct,
    saveProduct,
    getNextId
}