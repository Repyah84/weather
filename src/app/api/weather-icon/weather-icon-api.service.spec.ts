import { TestBed } from '@angular/core/testing';

import { WeatherIconApiService } from './weather-icon-api.service';

describe('WeatherIconApiService', () => {
  let service: WeatherIconApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherIconApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
