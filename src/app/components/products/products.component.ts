import { Component, ElementRef, ViewChild, OnInit, OnChanges } from "@angular/core";
import { Product, ProductConfig } from "../product";
import {LoggingService} from "./../../services/logging.service";
import { ProductService } from "./../../services/product.service";
import { IProduct } from "../../services/products-api";
import { Router } from "@angular/router";

@Component({
    selector:"app-products",
    templateUrl:"./products.component.html",
    //providers:[ProductService]
})
export class ProductsComponent implements OnInit{
    // ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        
    // }
    ngOnInit(): void {
        this.products = this.productService.getProducts();
        //this.products = this.productService.products;
        this.productService.notifyParent.subscribe(()=>{
            console.log("Inside Products Component Subscribe Method");
            this.products = this.productService.getProducts();    
        });
    }


    Title:string = "Products List";
    imageWidth="50px";
    imageMargin="2px";
    showImage = false;
    rowColor="red";
    filterBy:string='';
    products: IProduct[];

    @ViewChild('filterBy') txtFilter:ElementRef;
    constructor(private svc:LoggingService,
        private productService:ProductService,
        private router:Router){
        
        
    }

    Redirect(product:IProduct){
        this.router.navigate(["/product",product.productId]);
    }

    ToggleImages():void{
        this.showImage = !this.showImage;
    }

    getColor(product:any):string{
        if (product.price<1000) {
            return "green";
        }else if (product.price>=1000 && product.price<2000) {
            return "blue";
        }

    return "red";
    }

    ParentHandler(data:any){
        console.log(data);
    }

    RemoveProduct(position:number){
        //this.products.splice(position,1);

        console.log(TestEnum.Val1);
        console.log(TestEnum.Val2);
        console.log(TestEnum.Val3);
    }

    SomeMethodCall(){ //filterBy:HTMLInputElement
        // let svc = new LoggingService();
        // svc.logStatus("Some random Status");
        this.svc.logStatus("Some random Status - Injected");
        // filterBy.value="Some new Text";
        //console.log(this.txtFilter.nativeElement.value);
        //this.filterBy = "Changed";
        
        
        // this.products.push(new Product(5
        //     ,"CPU",
        //      "PC-006",
        //      2502.52,
        //      4.3,
        //      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-MDR-XB950B1-Black-1_2000x_ede1a7fa-ba5d-4fec-bd96-c15017f8f2e4_2000x.jpg?v=1536753499",
        //      new ProductConfig("Others",2012),"Some Description 2"));        
    }

    TestFunc(){
        console.log('Test');
    }

    
}

export enum TestEnum{
    Val1=10,
    Val2,
    Val3
    }

// Different Types of Data Binding

// 1. String Interpolation
// 2. Property Binding
// 3. Event Binding
// 4. Two-way Binding 


// function name() {
//     //
//     //
//     const x = 10;
//     if (true) {
//         //const x = 10;
//         //x = 15;
//     }
//     console.log(x);
//     //
//     //
    
// }