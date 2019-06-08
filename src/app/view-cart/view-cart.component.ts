import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';
import { Product } from '../models/Product';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  cartitems: Product[];
  Price: number = 0;
  nodata:boolean = true;
  constructor(private citems: ProductServiceService,private cookie:CookieService) { }

  ngOnInit() {
    const id = this.cookie.get("id");
    if(id)
      this.citems.viewCart(id).subscribe(val => {
        this.cartitems = val;
        val.forEach((v) => this.Price += v.price);
        this.nodata = val.length > 0;
      });
  }
  delCartItem(ev: Product) {
    this.cartitems = this.cartitems.filter((val) => val.id !== ev.id);
    this.citems.delFromCart(0, ev.id).subscribe(val => console.log(val));
    this.Price -= ev.price;
    this.nodata = this.Price != 0;
  }
}
