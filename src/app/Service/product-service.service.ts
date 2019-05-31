import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const myheader = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  url: string = "http://localhost:1011/api";
  constructor(private httpc: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpc.post<Product[]>(`${this.url}/allproducts`, {}, myheader);
  }
  viewCart(uid: number): Observable<Product[]> {
    return this.httpc.post<Product[]>(`${this.url}/cart/${uid}`, {}, myheader);
  }
  buyProduct() {
  }
}
