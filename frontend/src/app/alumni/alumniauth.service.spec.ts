import { TestBed } from '@angular/core/testing';

import { AlumniauthService } from './alumniauth.service';

describe('AlumniauthService', () => {
  let service: AlumniauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumniauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
