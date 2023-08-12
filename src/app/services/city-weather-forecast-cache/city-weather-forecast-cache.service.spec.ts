import { TestBed } from '@angular/core/testing';

import { CityWeatherForecastCacheService } from './city-weather-forecast-cache.service';

describe('CityWeatherForecastCacheService', () => {
  let service: CityWeatherForecastCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityWeatherForecastCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
