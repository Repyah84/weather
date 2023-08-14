import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgListComponent } from './svg-list.component';

describe('SvgListComponent', () => {
  let component: SvgListComponent;
  let fixture: ComponentFixture<SvgListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgListComponent]
    });
    fixture = TestBed.createComponent(SvgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
