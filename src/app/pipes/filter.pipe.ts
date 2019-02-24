import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../components/product';
import { IProduct } from './../services/products-api';

@Pipe({
  name: 'filter',
  //pure:false
})
export class FilterPipe implements PipeTransform {
  filteredProductList:IProduct[]=[];
  transform(value: IProduct[], filterBy:string): any {
    if (filterBy.length<2 ) {
      return value;
    }else if (filterBy.length>=2) {
      this.filteredProductList = [];
      value.forEach((prod)=>{
        if (prod.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase())!==-1) {
          this.filteredProductList.push(prod);
        }
      });
      return this.filteredProductList;  
    }    
  }

}
