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
  viewCart(uid: string): Observable<Product[]> {
    const fd = new FormData();
    fd.append("id", uid);
    return this.httpc.post<Product[]>(`${this.url}/cart`, fd);
  }
  addToCart(uid: string, pid: number) {
    const fd = new FormData();
    fd.append("id", uid);
    return this.httpc.post(`${this.url}/addtocart/${pid}`, fd);
  }
  delFromCart(uid: number, pid: number) {
    return this.httpc.post(`${this.url}/delcart/${uid}/${pid}`, {}, myheader);
  }
  buyProduct() {
  }
  uploadImage(data: FormData): Observable<any> {
    return this.httpc.post<any>(`${this.url}/addimage`, data);
  }
}
