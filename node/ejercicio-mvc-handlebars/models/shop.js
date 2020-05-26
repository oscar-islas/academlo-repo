const fs = require('fs');
const path = require('path');

class Shop {

    getAll(){
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, "..", "text.txt"), (err, data) => {
                if(err){
                    reject(err);
                }else{
                    const products = JSON.parse(data);
                    resolve(products);
                }
            })
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
                fs.writeFile(path.join(__dirname, "..", "text.txt"), JSON.stringify(newProducts), (err) => {
                    if(err){
                        reject(err);
                    }
                    resolve(true);
                });
            })
        }) 
    }

    editProduct(product, id){
        //3. Método para actualizar un producto respecto a su id
        //arreglo.find(() => {})
        //arreglo.findIndex(() => {})
    }

    deleteProduct(id){
        //4. Método para borrar un producto respecto a su id 
        //arreglo.find(() => {})
        //arreglo.findIndex(() => {})
    }
}

const shopObj = new Shop();

module.exports = shopObj;