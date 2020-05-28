const fs = require('fs');
const path = require('path');

class Shop {

    getAll(){
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, "..", "text.json"), (err, data) => {
                if(err){
                    reject(err);
                }else{
                    const products = JSON.parse(data);
                    resolve(products);
                }
            })
        }) 
    }

    getProductById(id){
        return new Promise( async (resolve, reject) => {
            try{
                let products = await this.getAll();
                //Regresaríamos el objeto que coincida con el id
                let product = products.find( productObj => Number(productObj.id) === Number(id));
                resolve(product);
            }catch(err){
                reject(err);
            }
        })
        
    }

    nextId(){
        return new Promise((resolve, reject) => {
            this.getAll().then( products => {
                if(products.length === 0){
                    resolve(0);
                }else{
                    resolve(products[products.length - 1].id + 1);
                }
            }).catch( error => reject(err));
        })
    }

    saveProduct(product){
        return new Promise((resolve, reject) => {
            this.getAll().then( products => {
                let newProducts = [...products, product];
                fs.writeFile(path.join(__dirname, "..", "text.json"), JSON.stringify(newProducts), (err) => {
                    if(err){
                        reject(err);
                    }
                    resolve(true);
                });
            })
        }) 
    }

    editProduct(product, id){
        product.id = Number(product.id);
        return new Promise(async (resolve, reject) => {
            //Obtener la posicion en la que se encuentra mi producto en el arreglo 
            let products = await this.getAll();
            let indexProduct = products.findIndex( productObj => Number(productObj.id) === Number(id));
            products[indexProduct] = product; //Remplazando el producto en la posición n por el producto modificado
            fs.writeFile(path.join(__dirname, "..", "text.json"), JSON.stringify(products), (err) => {
                if(err){
                    reject(err) 
                } 
                resolve(true);
            });
        })
    }

    deleteProduct(id){
        return new Promise(async (resolve, reject) => {
            //Obtener la posicion en la que se encuentra mi producto en el arreglo 
            let products = await this.getAll();
            let indexProduct = products.findIndex( productObj => Number(productObj.id) === Number(id));
            products.splice(indexProduct, 1);
            fs.writeFile(path.join(__dirname, "..", "text.json"), JSON.stringify(products), (err) => {
                if(err){
                    reject(err) 
                } 
                resolve(true);
            });
        })
    }

    //7. Método para poder obtener todos los productos que coincidan con la búsqueda 
}

const shopObj = new Shop();

module.exports = shopObj;