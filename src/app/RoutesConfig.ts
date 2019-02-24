import {  Route } from "@angular/router";
import { DashboardComponent, ProductsComponent, ProductDetailsComponent } from "./components/component.index";
export const routes:Route[]=[
    {path:"home",component:DashboardComponent},
    {path:"products",component:ProductsComponent},
    {path:"product/:id",component:ProductDetailsComponent}, // /product/2
    {path:"",redirectTo:"home" , pathMatch:"full"},
    {path:"**",redirectTo:"home"}
];
