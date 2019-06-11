import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramepickerComponent } from './framepicker.component';

describe('FramepickerComponent', () => {
  let component: FramepickerComponent;
  let fixture: ComponentFixture<FramepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
