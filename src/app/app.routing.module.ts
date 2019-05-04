import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
    DashboardComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ProductEditComponent,
    AddProductComponent,
    UserComponent,
    ProductCatagoriesComponent
} from "./components/component.index";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import { AuthGuard } from "./services/auth.guard";
import { ProductGuard } from "./services/product.guard";
import { SignUpDeactivateGuard } from "./services/signup-deactivate.guard";



const routes:Routes = [
    {path:"",component:DashboardComponent},
    {
        path:"products",
        component:ProductsComponent,
        // canActivate:[AuthGuard],
        children:[
            {
                path:":id",
                component:ProductDetailsComponent,
                canActivate:[ProductGuard]
            },
            {
                path:":id/edit",
                component:ProductEditComponent,
            }
        ]
    },
    {path:"addproduct",component:AddProductComponent},
    {
        path:"signup",
        component:UserComponent,
        canDeactivate:[SignUpDeactivateGuard]
    },
    {path:"productCatagory",component:ProductCatagoriesComponent}
  ];
@NgModule({
imports:[
    RouterModule.forRoot(routes)
],
exports:[RouterModule]
})
export class AppRoutingModule{

}