import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
    DashboardComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ProductEditComponent
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
    }
  ];
@NgModule({
imports:[
    RouterModule.forRoot(routes)
],
exports:[RouterModule]
})
export class AppRoutingModule{

}