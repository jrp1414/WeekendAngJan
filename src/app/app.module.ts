import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';

import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ConvertToPipe } from './pipes/convert-to.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import {BasicHighlighter} from "./directives/basic-highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ShortenPipe,
    ConvertToPipe,
    FilterPipe,
    BasicHighlighter
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
