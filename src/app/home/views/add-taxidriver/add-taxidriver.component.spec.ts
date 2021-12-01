import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaxidriverComponent } from './add-taxidriver.component';

describe('AddTaxidriverComponent', () => {
  let component: AddTaxidriverComponent;
  let fixture: ComponentFixture<AddTaxidriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaxidriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaxidriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
