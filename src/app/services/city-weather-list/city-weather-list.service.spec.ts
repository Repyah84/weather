import { TestBed } from '@angular/core/testing';

import { CityWeatherCityListService } from './city-weather-list.service';

describe('CityWeatherCityListService', () => {
  let service: CityWeatherCityListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityWeatherCityListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
