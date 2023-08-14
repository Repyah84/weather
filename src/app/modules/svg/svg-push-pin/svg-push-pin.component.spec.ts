import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPushPinComponent } from './svg-push-pin.component';

describe('SvgPushPinComponent', () => {
  let component: SvgPushPinComponent;
  let fixture: ComponentFixture<SvgPushPinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgPushPinComponent]
    });
    fixture = TestBed.createComponent(SvgPushPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
