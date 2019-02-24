import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {
  ProductsComponent,
  ProductThumbnailComponent,
  ProductDetailsComponent,
  HeaderComponent, 
  FooterComponent,
  TempProductsComponent
} from "./components/component.index";

import {
  UnlessDirective,
  BasicHighlighter,
  BetterHighlightDirective
} from "./directives/directive.index";

import {ShortenPipe,ConvertToPipe,FilterPipe} from "./pipes/pipes.index";

import { AppComponent } from './app.component';
import { LoggingService } from './services/logging.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { routes } from './RoutesConfig';

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
    TempProductsComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
