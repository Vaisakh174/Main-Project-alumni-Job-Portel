import { TestBed } from '@angular/core/testing';

import { FacApiserviceService } from './fac-apiservice.service';

describe('FacApiserviceService', () => {
  let service: FacApiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacApiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
