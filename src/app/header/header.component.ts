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
  constructor(private aroute:ActivatedRoute,private login:DbuserService,private cookie:CookieService) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(val=>{
      if(val.home){
        console.log("Home")
      }
    });
    this.login.isValid().subscribe(val=>{
      if(val.err){
        this.cookie.delete("id");
      }
    })
  }

}
