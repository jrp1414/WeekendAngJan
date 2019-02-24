import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from './../../services/products-api';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product:IProduct;
  @Input() showHideFlag:boolean;
  constructor(private productSvc:ProductService) { }

  ngOnInit() {
    //console.log(this.product);
  }
  RemoveProduct(productId: number){
    this.productSvc.removeProduct(this.product.productId);
    this.productSvc.notifyParent.emit("notify");
  }
}
