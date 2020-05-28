import product from '../models/product';
import shop from '../models/shop';
import {Request, Response} from 'express';

const getProducts = async (req:Request, res:Response):Promise<void> => {
    try{
        let products = await shop.getAll();
        res.render('home', {pageTitle: "Inicio | Bienvenida", products: products, menor: true, mayor: false});
    }catch(e){
        console.log(e);
    }
};

const addProduct = (req:Request, res:Response):void => {
    res.render('add-product', {pageTitle: "Agregar Producto"});
}

const saveProduct = async (req:Request, res:Response):Promise<void> => {
    let id = await shop.nextId();
    let {name, price, description, imgUrl, category} = req.body;
    let nuevoProducto = new product(id, name, price, category, description, imgUrl);
    let correcto = await shop.saveProduct(nuevoProducto);
    if(correcto){
        res.redirect('/');
    }
}

const postEditProduct = async (req: Request, res: Response):Promise<void> => {
    let {name, description, price, imgUrl, category} = await shop.getProductById(Number(req.params.id));
    res.render('edit-product', {id: req.params.id, name, description, price, imgUrl, category});
}

const updateProduct = async (req: Request, res: Response):Promise<void> => {
    try{
        let productObj = {...req.body};
        let id = req.params.id;
        await shop.editProduct(productObj, Number(id));
        res.redirect('/');
    }catch(err){
        console.log(err);
    }
}

const postDeleteProduct = async (req: Request, res: Response):Promise<void> => {
    await shop.deleteProduct(Number(req.params.id));
    res.redirect('/');
}

const getProductDetail = async (req: Request, res: Response):Promise<void> => {
    try{
        let {name, description, price, category, imgUrl} = await shop.getProductById(Number(req.params.id));
        res.render('detail-product', {name, description, price, category, imgUrl});
    }catch(error){
        console.log(error);
    }
}

const getProductsByS = async (req: Request, res: Response):Promise<void> => {
    try{
        let s:any = req.query.s;
        let products = await shop.getAll();
        products = products.filter((productObj: product) => searchFilter(productObj, s) );
        res.render('search', {products});
    }catch(error){
        console.log(error);
    }
}

const searchFilter = (product: product, s: string): boolean => {
    let props = Object.values(product);
    let result = false;
    props.forEach( p => {
        if(typeof p === 'string' && p.substring(1, p.length) === s){
            result = true;
        }else if(p === s){
            result = true;
        }
    });
    return result;
}

export = {
    getProducts,
    addProduct,
    postEditProduct,
    updateProduct,
    saveProduct,
    postDeleteProduct,
    getProductDetail, 
    getProductsByS
}