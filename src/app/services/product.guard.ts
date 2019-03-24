import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import {Observable} from "rxjs"
import { ProductService } from "./product.service";

@Injectable({
    providedIn:"root"
})
export class ProductGuard implements CanActivate{
    constructor(private router:Router, private prodService:ProductService){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : boolean | Observable<boolean> | Promise<boolean> {
        let id = +route.params["id"];
        if(this.prodService.getProductDetails(id)){
            return true;
        }
        this.router.navigate(["/products"]);
    }

}