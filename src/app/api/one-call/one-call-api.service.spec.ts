import { TestBed } from '@angular/core/testing';

import { OneCallApiService } from './one-call-api.service';

describe('OneCallApiService', () => {
  let service: OneCallApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneCallApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
