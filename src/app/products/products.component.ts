import { Component } from "@angular/core";


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

    products:any = [
        {
            "productId":1,
            "productName":"Monitor",
            "productCode":"PC001",
            "price":2500.52,
            "rating":4.2,
            "image":"https://static.bhphoto.com/images/images750x750/1479134183000_1073477.jpg"
        },
        {
            "productId":2,
            "productName":"Key Board",
            "productCode":"PC002",
            "price":500.52,
            "rating":4,
            "image":"https://assets.logitech.com/assets/65027/k740-refresh-gallery-image.pnghttps://static.bhphoto.com/images/images750x750/1479134183000_1073477.jpg"
        },
        {
            "productId":3,
            "productName":"Mouse",
            "productCode":"PC003",
            "price":250,
            "rating":4.5,
            "image":"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05917807.png"
        },
        {
            "productId":4,
            "productName":"UPS",
            "productCode":"PC004",
            "price":504.52,
            "rating":4.2,
            "image":"https://cdn-reichelt.de/bilder/web/artikel_ws/E910/APC_SMC1500I_01.jpg"
        },
        {
            "productId":5,
            "productName":"Head Phone",
            "productCode":"PC005",
            "price":1200.52,
            "rating":3.5,
            "image":"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-MDR-XB950B1-Black-1_2000x_ede1a7fa-ba5d-4fec-bd96-c15017f8f2e4_2000x.jpg?v=1536753499"
        }
    ];
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