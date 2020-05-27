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

const postEditProduct = async (req, res) => {
    //5. Llamar al método que permita editar el producto y al final redireccionar a home 
    let {name, description, price, imgUrl, category} = await shop.getProductById(req.params.id);
    res.render('edit-product', {id: req.params.id, name, description, price, imgUrl, category});
}

const updateProduct = async (req, res) => {
    try{
        let productObj = {...req.body};
        let id = req.params.id;
        await shop.editProduct(productObj, id);
        res.redirect('/');
    }catch(err){
        console.log(err);
    }
}

const postDeleteProduct = async (req, res) => {
    //6. Llamar al método que permita borrar el producto y al final redireccionar a home 
    await shop.deleteProduct(req.params.id);
    res.redirect('/');
}

// 5. Crear el controlador para mostrar una vista para todos los productos que cumplan con el criterio de busqueda
// 6. Crear el controlador para mostrar el detalle de la vista


module.exports = {
    getProducts,
    addProduct,
    postEditProduct,
    updateProduct,
    saveProduct,
    postDeleteProduct,
    getNextId
}