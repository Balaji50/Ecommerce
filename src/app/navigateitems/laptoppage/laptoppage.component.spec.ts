import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptoppageComponent } from './laptoppage.component';

describe('LaptoppageComponent', () => {
  let component: LaptoppageComponent;
  let fixture: ComponentFixture<LaptoppageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaptoppageComponent]
    });
    fixture = TestBed.createComponent(LaptoppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
