import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
  ProductsComponent,
  ProductThumbnailComponent,
  ProductDetailsComponent,
  HeaderComponent, 
  FooterComponent,
  TempProductsComponent,
  ProductEditComponent
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
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';

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
    DashboardComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LoggingService,AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
