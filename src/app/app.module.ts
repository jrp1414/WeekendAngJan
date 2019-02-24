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
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/app-unless.directive';
import { LoggingService } from './services/logging.service';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component';
import { TempProductsComponent } from './components/temp-products/temp-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ShortenPipe,
    ConvertToPipe,
    FilterPipe,
    BasicHighlighter,
    BetterHighlightDirective,
    UnlessDirective,
    ProductThumbnailComponent,
    TempProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
