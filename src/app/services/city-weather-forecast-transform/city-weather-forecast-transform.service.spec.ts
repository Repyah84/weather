import { TestBed } from '@angular/core/testing';

import { CityWeatherForecastTransformService } from './city-weather-forecast-transform.service';

describe('CityWeatherForecastTransformService', () => {
  let service: CityWeatherForecastTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityWeatherForecastTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
