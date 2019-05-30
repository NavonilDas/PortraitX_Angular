import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  getProducts():Product[]{
    return [
      {
        id:1,
        name:"APJ Abdul Kalam",
        price:200,
        image:"https://i.ibb.co/hswc83c/portrait-painting-500x500.jpg",
        purchased:false
      },
      {
        id:2,
        name:"Boy Painting",
        price:300,
        image:"https://i.ibb.co/nBrdtt1/il-570x-N-1307185578-6qon.jpg",
        purchased:false        
      }
    ];
  }
  buyProduct(){
  }
}
