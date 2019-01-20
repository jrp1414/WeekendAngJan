import { Component } from "@angular/core";


@Component({
    selector:"app-products",
    templateUrl:"./products.component.html"
})
export class ProductsComponent {
    Title:string = "Products List";
    showData: boolean= false;
    productStatus:string = "";
    productName:string = "";
    constructor(){
        setTimeout(()=>{this.showData=true;},5000);
    }
//function (x,y){}  -- Standard way to write a function
// (x:number,y:number) =>x+y;
// (x:number,y:number) =>{
    /// Line1
    // Line 2
    // return x+y; 
//};
    getData():string{
        return "Hello world!!!!";
    }

    onProductAdded(){
        this.productStatus = "Product Added";
    }

    onProductNameChanged(event:Event){
        // console.log(event);
        this.productName = (<HTMLInputElement>event.target).value;
    }

}

// Different Types of Data Binding

// 1. String Interpolation
// 2. Property Binding
// 3. Event Binding
// 4. Two-way Binding 