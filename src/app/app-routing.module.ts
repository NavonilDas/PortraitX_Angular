import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewCartComponent } from './view-cart/view-cart.component';

const routes:Routes = [
    {path:'veiwCart',component:ViewCartComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }