import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenfashionComponent } from './menfashion.component';

describe('MenfashionComponent', () => {
  let component: MenfashionComponent;
  let fixture: ComponentFixture<MenfashionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenfashionComponent]
    });
    fixture = TestBed.createComponent(MenfashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
