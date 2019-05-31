import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';
import { ProductServiceService } from '../Service/product-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cStyle:string = "btn btn-outline-info";
  @Input() product: Product;
  constructor(private prodService: ProductServiceService) { }

  ngOnInit() {
  }
  BuyItem() {
    console.log("item buy" + this.product.id)
  }
  addToCart(e) {
    // fetch user id
    this.prodService.addToCart(0, this.product.id).subscribe(val => console.log(val));
    this.cStyle = "btn btn-success";
  }
}
