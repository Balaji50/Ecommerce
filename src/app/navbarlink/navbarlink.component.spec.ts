import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarlinkComponent } from './navbarlink.component';

describe('NavbarlinkComponent', () => {
  let component: NavbarlinkComponent;
  let fixture: ComponentFixture<NavbarlinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarlinkComponent]
    });
    fixture = TestBed.createComponent(NavbarlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
