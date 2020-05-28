class Product {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    imgUrl: string;

    constructor(id:number, name:string, price:number, category:string, description:string, imgUrl:string){
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
    }
}

export default Product;