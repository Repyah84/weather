import { TestBed } from '@angular/core/testing';

import { GeocodingCacheService } from './geocoding-cache.service';

describe('GeocodingCacheService', () => {
  let service: GeocodingCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeocodingCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
