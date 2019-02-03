import { Component } from "@angular/core";
import { Product, ProductConfig } from "../Model/product";


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

    products:Product[] = [
        new Product(
            1,
            "Monitor",
            "PC001",
            2502,4.2,
            "https://static.bhphoto.com/images/images750x750/1479134183000_1073477.jpg",
            new ProductConfig("Computer",2015)
            ),
        new Product(
            2,
            "Key Board",
            "PC002",
            1502,
            4.2,
            "https://assets.logitech.com/assets/65027/k740-refresh-gallery-image.pnghttps://static.bhphoto.com/images/images750x750/1479134183000_1073477.jpg",
            new ProductConfig("Computer",2016)),
        new Product(
            3,
            "Mouse",
            "PC003",
            502,
            4.2,
            "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05917807.png",
            new ProductConfig("Computer",2017)),
        new Product(
            4,
            "Monitor",
            "PC004",
            2502,
            4.2,
            "https://cdn-reichelt.de/bilder/web/artikel_ws/E910/APC_SMC1500I_01.jpg",
            new ProductConfig("Furniture",2011)),
        new Product(5
            ,"Monitor",
             "PC005",
             2502,
             4.2,
             "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-MDR-XB950B1-Black-1_2000x_ede1a7fa-ba5d-4fec-bd96-c15017f8f2e4_2000x.jpg?v=1536753499",
             new ProductConfig("Others",2012))       
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