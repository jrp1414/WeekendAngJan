import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  prodId:number=2;
  prodName:string='';

  @ViewChild('frm') frm:NgForm;
  constructor() { }

  ngOnInit() {
  }

  UpdateProductName(prodName:string){
    let result:string='';
    for (let chars of prodName) {
      result += chars.toLocaleUpperCase();  
    }
    this.prodName = result;
  }

  //{productId:1, productName:'Test1'}

  // onProductSubmit(form:NgForm){
  //   console.log(form.value);
  //   //Write some code to call the HTTP Service and pass data as input to my backend. 
  // }

  onProductSubmit(){
    console.log(this.frm.value);
    //Write some code to call the HTTP Service and pass data as input to my backend. 
  }
}


// Template Driven Approach
// Reactive Approach
