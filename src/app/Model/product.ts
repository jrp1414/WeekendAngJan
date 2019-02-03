export class Product{
    productId:number;
    productName:string;
    productCode:string;
    price:number;
    rating:number;
    image:string;
    productConfig:ProductConfig;
    
    constructor(productId:number,productName:string,productCode:string,
                price:number,rating:number,image:string,productConfig:ProductConfig){
    this.productId=productId;
    this.productCode=productCode;
    this.productName = productName;
    this.price = price;
    this.rating = rating;
    this.image = image;
    this.productConfig = productConfig;
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

