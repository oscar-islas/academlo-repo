const fs = require('fs');
const path = require('path');

class Product {
    constructor(id, nombre, precio, categoria, descripcion, imagen){
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }

    getProduct(){
        return this;
    }
}

module.exports = Product;