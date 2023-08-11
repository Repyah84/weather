import { TestBed } from '@angular/core/testing';

import { CityWeatherCacheService } from './city-weather-cache.service';

describe('CityWeatherCacheService', () => {
  let service: CityWeatherCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityWeatherCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
