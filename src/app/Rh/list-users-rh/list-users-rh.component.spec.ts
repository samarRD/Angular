import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersRhComponent } from './list-users-rh.component';

describe('ListUsersRhComponent', () => {
  let component: ListUsersRhComponent;
  let fixture: ComponentFixture<ListUsersRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUsersRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUsersRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
