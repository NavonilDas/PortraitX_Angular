import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductServiceService } from 'src/app/Service/product-service.service';
import { EventEmitter } from '@angular/core';
import { IMAGEURL } from 'src/app/models/Constants';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() citem: Product;
  @Output() deleteItem: EventEmitter<Product> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  delFromCart() {
    this.deleteItem.emit(this.citem);
  }
  GetImageURL(e) {
    return IMAGEURL + e;
  }
}
