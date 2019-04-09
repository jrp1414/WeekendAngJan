import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
    DashboardComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ProductEditComponent,
    AddProductComponent,
    UserComponent
} from "./components/component.index";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import { AuthGuard } from "./services/auth.guard";
import { ProductGuard } from "./services/product.guard";


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
    {path:"user",component:UserComponent},
  ];
@NgModule({
imports:[
    RouterModule.forRoot(routes)
],
exports:[RouterModule]
})
export class AppRoutingModule{

}