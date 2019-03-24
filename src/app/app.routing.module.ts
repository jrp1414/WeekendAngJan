import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
    DashboardComponent,
    ProductDetailsComponent,
    ProductsComponent
} from "./components/component.index";

const routes:Routes = [
    {path:"",component:DashboardComponent},
    {path:"product/:id",component:ProductDetailsComponent},
    {path:"products",component:ProductsComponent}
  ];
@NgModule({
imports:[
    RouterModule.forRoot(routes)
],
exports:[RouterModule]
})
export class AppRoutingModule{

}