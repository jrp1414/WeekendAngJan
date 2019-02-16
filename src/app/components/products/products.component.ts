import { Component, ElementRef, ViewChild } from "@angular/core";
import { Product, ProductConfig } from "../product";


@Component({
    selector:"app-products",
    templateUrl:"./products.component.html"
})
export class ProductsComponent {
    Title:string = "Products List";
    imageWidth="50px";
    imageMargin="2px";
    toggleImage = false;
    rowColor="red";
    filterBy:string='';

    @ViewChild('filterBy') txtFilter:ElementRef;
    constructor(){
    }

    ToggleImages():void{
        this.toggleImage = !this.toggleImage;
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
        this.products.splice(position,1);

        console.log(TestEnum.Val1);
        console.log(TestEnum.Val2);
        console.log(TestEnum.Val3);
    }

    SomeMethodCall(){ //filterBy:HTMLInputElement
        // filterBy.value="Some new Text";
        //console.log(this.txtFilter.nativeElement.value);
        //this.filterBy = "Changed";
        this.products.push(new Product(5
            ,"CPU",
             "PC-006",
             2502.52,
             4.3,
             "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-MDR-XB950B1-Black-1_2000x_ede1a7fa-ba5d-4fec-bd96-c15017f8f2e4_2000x.jpg?v=1536753499",
             new ProductConfig("Others",2012),"Some Description 2"));        
    }

    TestFunc(){
        console.log('Test');
    }

    products:Product[] = [
        new Product(
            1,
            "Monitor",
            "PC-001",
            2502.45525,4.2,
            "https://static.bhphoto.com/images/images750x750/1479134183000_1073477.jpg",
            new ProductConfig("Computer",2015),"Short Desc"
            ),
        new Product(
            2,
            "Key Board",
            "PC-002",
            1502,
            4.2,
            "https://assets.logitech.com/assets/65027/k740-refresh-gallery-image.pnghttps://static.bhphoto.com/images/images750x750/1479134183000_1073477.jpg",
            new ProductConfig("Computer",2016),"Some Description 1"),
        new Product(
            3,
            "Mouse",
            "PC-003",
            502,
            4.2,
            "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05917807.png",
            new ProductConfig("Computer",2017),"Some Description 1"),
        new Product(
            4,
            "CD Drive",
            "PC-004",
            2502,
            4.2,
            "https://cdn-reichelt.de/bilder/web/artikel_ws/E910/APC_SMC1500I_01.jpg",
            new ProductConfig("Furniture",2011),"Some Description 1"),
        new Product(5
            ,"CPU",
             "PC-005",
             2502,
             4.2,
             "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-MDR-XB950B1-Black-1_2000x_ede1a7fa-ba5d-4fec-bd96-c15017f8f2e4_2000x.jpg?v=1536753499",
             new ProductConfig("Others",2012),"Some Description 1")       
    ];
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