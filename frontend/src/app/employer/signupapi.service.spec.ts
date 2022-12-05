import { TestBed } from '@angular/core/testing';

import { SignupapiService } from './signupapi.service';

describe('SignupapiService', () => {
  let service: SignupapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
