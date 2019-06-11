import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericboxComponent } from './numericbox.component';

describe('NumericboxComponent', () => {
  let component: NumericboxComponent;
  let fixture: ComponentFixture<NumericboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
