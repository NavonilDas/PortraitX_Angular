import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DbuserService } from 'src/app/Service/dbuser.service';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @Output() loginSuccess: EventEmitter<any> = new EventEmitter();
  constructor(private dbservice: DbuserService, private cookie: CookieService, private aroute: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }
  log(e: any) {
  }
  Login(email, pass) {
    this.dbservice.login({ email, pass }).subscribe(val => {
      if (val.err == 0) {
        this.cookie.set("id", val.id);

        this.aroute.navigate(['/'], {
          relativeTo: this.route,
          queryParams: {
            home: true
          },
        });
      } else {
        console.log("Error Encountered");
      }
    });
    // this.cookie.set("test","123");
  }
}
