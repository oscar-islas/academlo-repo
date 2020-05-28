import fs from 'fs';
import path from 'path';
import Product from '../models/product';

class Shop{

    getAll():Promise<Array<Product>>{
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, "..", "text.json"), (err: Error | null, data: string | Buffer) => {
                if(err){
                    reject(err);
                }else{
                    const products = JSON.parse(data.toString());
                    resolve(products);
                }
            })
        }) 
    }
    
    getProductById(id:number):Promise<Product | any>{
        return new Promise( async (resolve, reject) => {
            try{
                let products = await this.getAll();
                //Regresaríamos el objeto que coincida con el id
                let product = products.find( (productObj: Product | any) => { return productObj.id === id });
                resolve(product);
            }catch(err){
                reject(err);
            }
        })        
    }

    nextId():Promise<number>{
        return new Promise((resolve, reject) => {
            this.getAll().then((product:Array<Product>) => {
                if(product.length === 0){
                    resolve(0);
                }else{
                    resolve(product[product.length - 1].id + 1);
                }
            }).catch( error => reject(error));
        })
    }

    saveProduct(product: Product):Promise<boolean>{
        return new Promise((resolve, reject) => {
            this.getAll().then( products => {
                let newProducts:Array<Product> = [...products, product];
                fs.writeFile(path.join(__dirname, "..", "text.json"), JSON.stringify(newProducts), (err) => {
                    if(err){
                        reject(err);
                    }
                    resolve(true);
                });
            })
        }) 
    }

    editProduct(product: Product, id: number):Promise<boolean>{
        product.id = Number(product.id);
        return new Promise(async (resolve, reject) => {
            //Obtener la posicion en la que se encuentra mi producto en el arreglo 
            let products:Array<Product> = await this.getAll();
            let indexProduct:number = products.findIndex( productObj => Number(productObj.id) === Number(id));
            products[indexProduct] = product; //Remplazando el producto en la posición n por el producto modificado
            fs.writeFile(path.join(__dirname, "..", "text.json"), JSON.stringify(products), (err) => {
                if(err){
                    reject(err) 
                } 
                resolve(true);
            });
        })
    }

    deleteProduct(id: number):Promise<boolean>{
        return new Promise(async (resolve, reject) => {
            //Obtener la posicion en la que se encuentra mi producto en el arreglo 
            let products:Array<Product> = await this.getAll();
            let indexProduct:number = products.findIndex( productObj => Number(productObj.id) === id);
            products.splice(indexProduct, 1);
            fs.writeFile(path.join(__dirname, "..", "text.json"), JSON.stringify(products), (err) => {
                if(err){
                    reject(err) 
                } 
                resolve(true);
            });
        })
    }
}

const shopObj = new Shop();

export default shopObj;