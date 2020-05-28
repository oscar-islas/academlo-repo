const fs = require('fs');
const path = require('path');

class Product {
    constructor(id, name, price, category, description, imgUrl){
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
    }

    getProduct(){
        return this;
    }
}

module.exports = Product;