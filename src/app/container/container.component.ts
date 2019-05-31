import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';
import { Product } from '../models/Product';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  
  products:Product[];

  constructor(private prodService:ProductServiceService) { }

  ngOnInit() {
    this.prodService.getProducts().subscribe(prods => this.products = prods);
  }

}
