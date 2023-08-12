import { TestBed } from '@angular/core/testing';

import { CityWeatherForecastService } from './city-weather-forecast.service';

describe('CityWeatherForecastService', () => {
  let service: CityWeatherForecastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityWeatherForecastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
