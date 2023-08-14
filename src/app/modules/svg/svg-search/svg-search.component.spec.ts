import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSearchComponent } from './svg-search.component';

describe('SvgSearchComponent', () => {
  let component: SvgSearchComponent;
  let fixture: ComponentFixture<SvgSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgSearchComponent]
    });
    fixture = TestBed.createComponent(SvgSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
