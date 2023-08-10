import { TestBed } from '@angular/core/testing';

import { CityWeatherApiService } from './city-weather-api.service';

describe('CityWeatherApiService', () => {
  let service: CityWeatherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityWeatherApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
