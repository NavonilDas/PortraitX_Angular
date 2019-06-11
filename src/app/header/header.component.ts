import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbuserService } from '../Service/dbuser.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  CompanyName: string = "Portrait X";
  userName: string = undefined;
  menuItems: any[];

  menuVisible:boolean  = false;
  constructor(private aroute: ActivatedRoute,
    private login: DbuserService, private cookie: CookieService) { }

  fetchLogin() {
    this.login.isValid().subscribe(val => {
      if (val.err) {
        this.cookie.delete("id");
      } else {
        this.login.getMenuList().subscribe(val => {
          if (!val.err) {
            this.userName = val.name;
            this.menuItems = val.menu;
          }
        })
      }
    });
  }
  LogOut(E) {
    this.cookie.deleteAll();
    this.userName = undefined;
    this.menuItems = [];
    E.style = "displa:none;";
  }
  ngOnInit() {
    this.aroute.queryParams.subscribe(val => {
      if (val.home) {
        this.fetchLogin();
      }
    });
    this.fetchLogin();
  }

  ShowMenu(E){
    if(!this.menuVisible)
      E.style = "display:block;";
    else E.style = "displa:none;";
    this.menuVisible = !this.menuVisible;
  }

}
