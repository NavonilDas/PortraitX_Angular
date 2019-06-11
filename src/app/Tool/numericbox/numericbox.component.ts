import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-numericbox',
  templateUrl: './numericbox.component.html',
  styleUrls: ['./numericbox.component.css']
})
export class NumericboxComponent implements OnInit {
  
  @Input() default:number = 1;
  @Input() minimum:number = 1;
  @Input() maximum:number = 100;
  current:number;

  constructor() { }

  ngOnInit() {
    this.current = this.default;
  }
  Decrement(){
    if(this.current > this.minimum)
      --this.current;
  }
  Increment(){
    if(this.current < this.maximum)
      ++this.current;
  }
}
