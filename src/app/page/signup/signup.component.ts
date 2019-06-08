import { Component, OnInit } from '@angular/core';
import { DbuserService } from 'src/app/Service/dbuser.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  login: number = 1;

  constructor(private user: DbuserService) { }

  ngOnInit() {
  }

  AddUser(name, email, pass, addr, phno) {
    this.user.addUser({ name, email, pass, addr, phno }).subscribe(val => {
      this.login = val.err;
      console.log(this.login);
    });
  }
  log(x) {
    // console.log(x)
  }
}
