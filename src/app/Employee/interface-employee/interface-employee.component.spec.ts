import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceEmployeeComponent } from './interface-employee.component';

describe('InterfaceEmployeeComponent', () => {
  let component: InterfaceEmployeeComponent;
  let fixture: ComponentFixture<InterfaceEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
