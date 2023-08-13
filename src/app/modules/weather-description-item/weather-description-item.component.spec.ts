import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDescriptionItemComponent } from './weather-description-item.component';

describe('WeatherDescriptionItemComponent', () => {
  let component: WeatherDescriptionItemComponent;
  let fixture: ComponentFixture<WeatherDescriptionItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDescriptionItemComponent]
    });
    fixture = TestBed.createComponent(WeatherDescriptionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
