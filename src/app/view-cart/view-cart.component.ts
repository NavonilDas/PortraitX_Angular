import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  cartitems: Product[];
  Price: number = 0;
  constructor(private citems: ProductServiceService) { }

  ngOnInit() {
    this.citems.viewCart(0).subscribe(val => {
      this.cartitems = val;
      val.forEach((v) => this.Price += v.price);
    });
  }
  delCartItem(ev: Product) {
    this.cartitems = this.cartitems.filter((val) => val.id !== ev.id);
    this.citems.delFromCart(0, ev.id).subscribe(val => console.log(val));
    this.Price -= ev.price;
  }
}
