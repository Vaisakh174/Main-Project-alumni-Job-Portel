import { TestBed } from '@angular/core/testing';

import { AlumniAuthGuard } from './alumni-auth.guard';

describe('AlumniAuthGuard', () => {
  let guard: AlumniAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlumniAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
