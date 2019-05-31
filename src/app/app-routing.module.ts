import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from './container/container.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { CustomizeComponent } from './customize/customize.component';


const routes:Routes = [
    {path:'',component:ContainerComponent},
    {path:'about',component:AboutpageComponent},
    {path:'customize',component:CustomizeComponent},
    {path:'veiwCart',component:ViewCartComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }