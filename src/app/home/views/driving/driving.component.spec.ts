import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingComponent } from './driving.component';

describe('DrivingComponent', () => {
  let component: DrivingComponent;
  let fixture: ComponentFixture<DrivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
