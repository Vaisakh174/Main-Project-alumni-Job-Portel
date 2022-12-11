import { TestBed } from '@angular/core/testing';

import { AlumniapiService } from './alumniapi.service';

describe('AlumniapiService', () => {
  let service: AlumniapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumniapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
