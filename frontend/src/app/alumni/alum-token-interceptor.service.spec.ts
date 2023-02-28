import { TestBed } from '@angular/core/testing';

import { AlumTokenInterceptorService } from './alum-token-interceptor.service';

describe('AlumTokenInterceptorService', () => {
  let service: AlumTokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumTokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
