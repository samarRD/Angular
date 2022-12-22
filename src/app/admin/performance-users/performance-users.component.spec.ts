import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceUsersComponent } from './performance-users.component';

describe('PerformanceUsersComponent', () => {
  let component: PerformanceUsersComponent;
  let fixture: ComponentFixture<PerformanceUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
