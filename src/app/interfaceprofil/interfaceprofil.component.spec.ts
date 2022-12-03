import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceprofilComponent } from './interfaceprofil.component';

describe('InterfaceprofilComponent', () => {
  let component: InterfaceprofilComponent;
  let fixture: ComponentFixture<InterfaceprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceprofilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
