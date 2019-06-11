import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from './container/container.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { AboutpageComponent } from './page/aboutpage/aboutpage.component';
import { CustomizeComponent } from './customize/customize.component';
import { SigninComponent } from './page/signin/signin.component';
import { SignupComponent } from './page/signup/signup.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { ProfileComponent } from './page/profile/profile.component';
import { ViewOrdersComponent } from './page/view-orders/view-orders.component';
import { HelpComponent } from './page/help/help.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';


const routes: Routes = [
    { path: '', component: ContainerComponent },
    { path: 'about', component: AboutpageComponent },
    { path: 'customize', component: CustomizeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'viewCart', component: ViewCartComponent },
    { path: 'orders', component: ViewOrdersComponent },
    { path: 'help', component: HelpComponent },
    { path: 'profile', component: ProfileComponent },
    //// Admin Pages
    { path: 'admin/addproduct',component:AddProductComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }