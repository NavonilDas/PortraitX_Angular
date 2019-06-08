import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DbuserService {
  url: string = "http://localhost:1011/api";

  constructor(private https: HttpClient, private cookie: CookieService) { }
  addUser(user): Observable<any> {
    const fd = new FormData();
    fd.append("name", user.name);
    fd.append("email", user.email);
    fd.append("password", user.pass);
    fd.append("address", user.addr);
    fd.append("phNo", user.phno);
    return this.https.post<any>(`${this.url}/signup`, fd);
  }
  login(user): Observable<any> {
    let fd = new FormData();
    fd.append("email", user.email);
    fd.append("pass", user.pass);
    return this.https.post<any>(`${this.url}/login`, fd);
  }
  isAdmin(): Observable<any> {
    const fd = new FormData();
    fd.append("id", this.cookie.get("id"));
    return this.https.post<any>(`${this.url}/isadmin`, fd);
  }
  isValid() {
    const fd = new FormData();
    fd.append("id", this.cookie.get("id"));
    return this.https.post<any>(`${this.url}/valid`, fd);
  }
}
