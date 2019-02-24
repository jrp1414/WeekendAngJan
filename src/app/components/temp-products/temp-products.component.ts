import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { IProduct } from '../../services/products-api';

@Component({
  selector: 'app-temp-products',
  templateUrl: './temp-products.component.html',
  styleUrls: ['./temp-products.component.css'],
  // providers:[ProductService]
})
export class TempProductsComponent implements OnInit {

  constructor(private productSvc:ProductService) { }
  products:IProduct[];
  ngOnInit() {
    this.productSvc.getProducts();
    this.productSvc.notifyParent.subscribe(()=>{
      console.log("Inside Temp Products Component Subscribe Method");
      this.products = this.productSvc.getProducts();    
  });
  }

}
