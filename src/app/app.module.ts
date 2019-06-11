import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { AboutpageComponent } from './page/aboutpage/aboutpage.component';
import { CustomizeComponent } from './customize/customize.component';
import { CartItemComponent } from './view-cart/cart-item/cart-item.component';
import { SigninComponent } from './page/signin/signin.component';
import { SignupComponent } from './page/signup/signup.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { RadiogrpComponent } from './Tool/radiogrp/radiogrp.component';
import { NumericboxComponent } from './Tool/numericbox/numericbox.component';
import { FramepickerComponent } from './Tool/framepicker/framepicker.component';
import { ProfileComponent } from './page/profile/profile.component';
import { ViewOrdersComponent } from './page/view-orders/view-orders.component';
import { HelpComponent } from './page/help/help.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { ErrorsComponent } from './Tool/errors/errors.component';
import { VeiwProductComponent } from './page/veiw-product/veiw-product.component';

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
    SigninComponent,
    SignupComponent,
    GalleryComponent,
    RadiogrpComponent,
    NumericboxComponent,
    FramepickerComponent,
    ProfileComponent,
    ViewOrdersComponent,
    HelpComponent,
    AddProductComponent,
    ErrorsComponent,
    VeiwProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
