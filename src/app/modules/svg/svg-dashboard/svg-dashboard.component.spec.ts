import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDashboardComponent } from './svg-dashboard.component';

describe('SvgDashboardComponent', () => {
  let component: SvgDashboardComponent;
  let fixture: ComponentFixture<SvgDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgDashboardComponent]
    });
    fixture = TestBed.createComponent(SvgDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
