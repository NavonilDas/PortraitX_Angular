import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  Title:string = "Product 1";
  Price:number = 100;
  url:string = "https://auto.ndtvimg.com/car-images/big/ferrari/portofino/ferrari-portofino.jpg?v=27";
  constructor() { }

  ngOnInit() {
  }

}
