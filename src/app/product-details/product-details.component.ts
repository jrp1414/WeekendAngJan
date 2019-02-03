import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Product } from '../Model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class ProductDetailsComponent implements OnInit {
  @Input('productDetails') product:Product;
  @Output() OnProductDetailsClicked:EventEmitter<string> = new EventEmitter<string>();
  
   
  constructor() { }

  ngOnInit() {
  }

  ButtonClicked(){
    
    this.OnProductDetailsClicked.emit("This Event is raised from "+this.product.productName+" details");
  }

  getClass():any {
    if(this.product.productConfig.mfgYear<2016){
      // return {red:true,bold:true};
      // return "red bold";
      return ['red','bold'];
    }    
    return [];
  }
  getStyles():any{
    if(this.product.productConfig.mfgYear<2016){
      return {color:'red','font-weight':'bold'};
    }
    return {color:'green'};
  }
}


