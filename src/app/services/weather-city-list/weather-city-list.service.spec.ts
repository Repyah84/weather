import { TestBed } from '@angular/core/testing';

import { WeatherCityListService } from './weather-city-list.service';

describe('WeatherCitySearchListService', () => {
  let service: WeatherCityListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherCityListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
