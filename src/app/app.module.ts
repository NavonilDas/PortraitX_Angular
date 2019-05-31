import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { CustomizeComponent } from './customize/customize.component';
import { CartItemComponent } from './view-cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ContainerComponent,
    ViewCartComponent,
    AboutpageComponent,
    CustomizeComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
