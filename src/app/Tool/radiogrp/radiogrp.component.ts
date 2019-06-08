import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radiogrp',
  templateUrl: './radiogrp.component.html',
  styleUrls: ['./radiogrp.component.css']
})
export class RadiogrpComponent implements OnInit {
  @Input() options:string[];
  @Output() valueChange:EventEmitter<number> = new EventEmitter();
  name:string;

  constructor() { }

  ngOnInit() {
    this.name = "opt"+Date.now();
  }

  Replace(str:string){
    return str.split(" ").join("-");
  }
  radiogrpchange(i){
    this.valueChange.emit(i);
  }
}
