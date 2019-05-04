import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-product-catagories',
  templateUrl: './product-catagories.component.html',
  styleUrls: ['./product-catagories.component.css']
})
export class ProductCatagoriesComponent implements OnInit {

  prodCatagoryForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.prodCatagoryForm = this.fb.group({
      catagoryName:"",
      description:"",
      tags:this.fb.array([this.fb.control("")])
    });
  }

  AddTag(){
    (<FormArray>this.prodCatagoryForm.get("tags")).push(this.fb.control(""));
  }

  Save(){
    console.log(this.prodCatagoryForm.value);
  }

}
