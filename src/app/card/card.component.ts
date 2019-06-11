import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';
import { ProductServiceService } from '../Service/product-service.service';
import { CookieService } from 'ngx-cookie-service';
import { IMAGEURL } from '../models/Constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cStyle: string = "btn btn-outline-info";
  @Input() product: Product;
  constructor(private prodService: ProductServiceService, private cookie: CookieService) { }

  ngOnInit() {
  }
  BuyItem() {
    console.log("item buy" + this.product.id)
  }
  GetImageUrl(e){
    return IMAGEURL+e;
  }
  addToCart() {
    // fetch user id
    if (this.cookie.get("id"))
      this.prodService.addToCart(this.cookie.get("id"), this.product.id).subscribe(val => console.log(val));
    this.cStyle = "btn btn-success";
  }
}
