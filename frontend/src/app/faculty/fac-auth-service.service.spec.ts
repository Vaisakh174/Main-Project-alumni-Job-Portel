import { TestBed } from '@angular/core/testing';

import { FacAuthServiceService } from './fac-auth-service.service';

describe('FacAuthServiceService', () => {
  let service: FacAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
