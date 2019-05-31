import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';
import { Product } from '../models/Product';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  grid:SafeStyle;
  products:Product[];

  constructor(private prodService:ProductServiceService,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.prodService.getProducts().subscribe(prods => this.products = prods);
    let n = Math.floor(window.innerWidth / 250);
    console.log(n)
    this.grid = this.sanitizer.bypassSecurityTrustStyle(`grid-template-columns:repeat(${n},auto);`);
  }
  resizegrid(){
    let n = Math.floor(window.innerWidth / 250);
    this.grid = this.sanitizer.bypassSecurityTrustStyle(`grid-template-columns:repeat(${n},auto);`);
    console.log(n)
  }
}
