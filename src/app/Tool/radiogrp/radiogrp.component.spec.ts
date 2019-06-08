import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiogrpComponent } from './radiogrp.component';

describe('RadiogrpComponent', () => {
  let component: RadiogrpComponent;
  let fixture: ComponentFixture<RadiogrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiogrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiogrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
