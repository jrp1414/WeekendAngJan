import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "./../../services/product.service";
import { IProduct } from "../../services/products-api";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @ViewChild("frm") frm:NgForm;
  constructor(private productService :ProductService,private router:Router,private route:ActivatedRoute) { }
  product:IProduct;
  productId:number=2;
  productName:string='';

  productCode:string;
  // prodId:number;
  // prodName:string;
  ngOnInit() {
    this.route.params.subscribe((param)=>{
      let id= param["id"];
      this.product = this.productService.getProductDetails(id);
      // this.productId = this.product.productId;
      // this.productName = this.product.productName;
      // this.productCode = this.product.productCode;

      // let prod = this.productService.getProductDetails(id);
      // setTimeout(()=>{
      //   this.frm.setValue(prod);
      // },1000);   
    });
  }

  RedirectBack(){
    this.router.navigate(["/products"]);
  }
  onProductSubmit(form:NgForm){

  }
}
