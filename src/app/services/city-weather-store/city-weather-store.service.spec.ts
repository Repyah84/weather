import { TestBed } from '@angular/core/testing';

import { CityWeatherStoreService } from './city-weather-store.service';

describe('CityWeatherStoreService', () => {
  let service: CityWeatherStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityWeatherStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
