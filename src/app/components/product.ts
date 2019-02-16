export class Product{
    productId:number;
    productName:string;
    productCode:string;
    price:number;
    rating:number;
    image:string;
    productConfig:ProductConfig;
    description:string;
    constructor(productId:number,productName:string,productCode:string,
                price:number,rating:number,image:string,
                productConfig:ProductConfig,description:string){
    this.productId=productId;
    this.productCode=productCode;
    this.productName = productName;
    this.price = price;
    this.rating = rating;
    this.image = image;
    this.productConfig = productConfig;
    this.description = description;
    }
}

export class ProductConfig{
    type:string;
    mfgYear:number;
    constructor(type:string,mfgYear:number){
        this.mfgYear = mfgYear;
        this.type = type;
    }
}

