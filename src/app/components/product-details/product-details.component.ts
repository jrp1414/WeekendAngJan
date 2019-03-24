import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

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
  constructor(private productService:ProductService,
              private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    // var productId = parseInt(this.route.snapshot.params["id"]);
    // var productId = +this.route.snapshot.params["id"];
    
    // this.route.paramMap.subscribe((params)=>{
    //   this.productId = +params.get("id");
    //   // console.log(this.productId);
    //   // console.log(typeof(this.productId));
    // });

    this.route.params.subscribe((params)=>{
      this.productId = +params["id"];
      this.product = this.productService.getProductDetails(this.productId);
    });
    let qCode = this.route.snapshot.queryParams["code"];
    let qName = "";
    this.route.queryParams.subscribe((qParams)=>{
      qName = qParams["name"];
      console.log(qCode);
      console.log(qName);
    });

    let fText = this.route.snapshot.fragment;
    console.log("Fragment Logged using Snapshot ---- "+ fText);

    this.route.fragment.subscribe((fragm)=>{
      console.log("Fragment Logged using Subscribe Pattern ... "+ fragm);
    });


  }

}


