import { TestBed } from '@angular/core/testing';

import { CityGeocodingCacheService } from './city-geocoding-cache.service';

describe('CityGeocodingCacheService', () => {
  let service: CityGeocodingCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityGeocodingCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
