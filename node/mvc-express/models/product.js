const fs = require('fs');
const path = require('path');

class Product {
    constructor(nombre, precio, categoria, descripcion){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.descripcion = descripcion;
    }

    getAllProducts(){
        fs.readFile(path.join(__dirname, "..", "text.txt"), (err, data) => {
            if(err){
                console.log(err);
            }else{
                const products = JSON.parse(data);
                console.log(products);
            }
        })
    }
}

module.exports = Product;