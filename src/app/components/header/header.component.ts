import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService, private prodService:ProductService) { }

  product1Activated:boolean = false;
  product2Activated:boolean = false;
  ngOnInit() {
    this.prodService.Activate.subscribe((id:number)=>{
      if(id==1){
        this.product1Activated = true;
      }
      if(id==2){
        this.product2Activated = true;
      }
    });
  }

  Login(){
    this.auth.LogIn();
  }

  LogOut(){
    this.auth.LogOut();
  }

}
