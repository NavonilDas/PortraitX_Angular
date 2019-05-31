import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  Title: string = "Product 1";
  Price: number = 100;
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }
  BuyItem() {
    console.log("item buy" + this.product.id)
  }
}
