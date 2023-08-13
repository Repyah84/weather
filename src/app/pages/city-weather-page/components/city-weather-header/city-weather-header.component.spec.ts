import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherHeaderComponent } from './city-weather-header.component';

describe('CityWeatherHeaderComponent', () => {
  let component: CityWeatherHeaderComponent;
  let fixture: ComponentFixture<CityWeatherHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityWeatherHeaderComponent]
    });
    fixture = TestBed.createComponent(CityWeatherHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
