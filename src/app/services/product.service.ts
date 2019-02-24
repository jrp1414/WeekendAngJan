import { Injectable,EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';
import { IProduct, products } from './products-api';
import { Product } from '../components/product';


@Injectable({
  providedIn:"root"
})
export class ProductService {

  constructor(private loggingSvc:LoggingService) { }
  products:IProduct[]= products.splice(0);
  notifyParent:EventEmitter<string>=new EventEmitter();
  getProducts():IProduct[]{
    this.loggingSvc.logStatus("Get Products is called");
    return this.products;
  }

  removeProduct(productId:number):void{
    let tempProducts:IProduct[] = [];
    this.products.forEach(product => {
      if (product.productId!==productId) {
        tempProducts.push(product);
      }
    });

    this.products = tempProducts.splice(0);
  }

  // getProductDetails(productId:number):IProduct | {name:string,price:number} | null{
    getProductDetails(productId:number):IProduct | null{
    // for (const product of this.products) {
    //   if (product.productId===productId) {
    //     return product;
    //   }
    // }
    let result:IProduct;
    this.products.forEach((prod)=>{
      if (prod.productId===productId) {
        result = prod;
      }
    })
    return result?result:null;
  }

}
