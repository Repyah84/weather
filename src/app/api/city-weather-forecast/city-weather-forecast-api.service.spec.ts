import { TestBed } from '@angular/core/testing';

import { CityWeatherForecastApiService } from './city-weather-forecast-api.service';

describe('CityWeatherForecastApiService', () => {
  let service: CityWeatherForecastApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityWeatherForecastApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
