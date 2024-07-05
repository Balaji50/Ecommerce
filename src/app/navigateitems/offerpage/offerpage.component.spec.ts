import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferpageComponent } from './offerpage.component';

describe('OfferpageComponent', () => {
  let component: OfferpageComponent;
  let fixture: ComponentFixture<OfferpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferpageComponent]
    });
    fixture = TestBed.createComponent(OfferpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
