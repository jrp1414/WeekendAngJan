import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
              private router:Router,
              private productService:ProductService,
              private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    // var productId = parseInt(this.route.snapshot.params["id"]);
    // this.productId = +this.route.snapshot.params["id"];
    // this.product = this.productService.getProductDetails(this.productId);

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

  ProductEdit(id:number){
    //localhost:4200/products/5/edit
    this.router.navigate(["edit"],{relativeTo:this.route});
  }

  Redirect(){
    this.router.navigate(["/products",100],{relativeTo:this.route.root})
  }

  ActivateProduct(){
   this.productService.Activate.next(this.productId); 
  }

}


