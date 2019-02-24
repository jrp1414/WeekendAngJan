import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Product } from "../product";
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/services/products-api';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class ProductDetailsComponent implements OnInit {
  productId:number;
  product:IProduct;
  constructor(private route:ActivatedRoute,private productSvc:ProductService) {
    route.paramMap.subscribe((param)=>{
      this.productId = +(param.get("id"));
      this.product = this.productSvc.getProductDetails(this.productId);
    });
   }

  ngOnInit() {
  }

}


