import Product from '../models/product';
const path = require('path');
const product = require('../models/product');
const shop = require('../models/shop');
import {Request, Response} from 'express';

const getProducts = async (req:Request, res:Response) => {
    try{
        let products = await shop.getAll();
        res.render('home', {pageTitle: "Inicio | Bienvenida", products: products });
    }catch(e){
        console.log(e);
    }
};

const addProduct = (req:Request, res:Response) => {
    console.log(req.params.id); //Para obtener el parametro que viene con la url
    res.render('add-product', {pageTitle: "Agregar Producto"});
}

const saveProduct = async (req:Request, res:Response) => {
    let id = await shop.nextId();
    let {name, price, description, imgUrl, category} = req.body;
    let nuevoProducto = new product(id, name, price, category, description, imgUrl);
    let correcto = await shop.saveProduct(nuevoProducto);
    if(correcto){
        res.redirect('/');
    }
}

const getNextId = async (req:Request, res:Response) => {
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

const getProductDetail = async (req, res) => {
    try{
        let {name, description, price, category, imgUrl} = await shop.getProductById(req.params.id);
        res.render('detail-product', {name, description, price, category, imgUrl});
    }catch(error){
        console.log(error);
    }
}

const getProductsByS = async (req, res) => {
    try{
        console.log(req.query);
        let s = req.query.s;
        let products = await shop.getAll();
        products = products.filter(product => searchFilter(product, s) );
        res.render('search', {products});
    }catch(error){
        console.log(error);
    }
}

const searchFilter = (product, s) => {
    let props = Object.values(product);
    let result = false;
    props.forEach(p => {
        if(typeof p === 'string' && p.substring(1, p.length) === s){
            result = true;
        }else if(p === s){
            result = true;
        }
    });
    return result;
}

module.exports = {
    getProducts,
    addProduct,
    postEditProduct,
    updateProduct,
    saveProduct,
    postDeleteProduct,
    getNextId,
    getProductDetail, 
    getProductsByS
}