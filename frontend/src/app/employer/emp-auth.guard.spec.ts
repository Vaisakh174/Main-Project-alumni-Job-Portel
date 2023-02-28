import { TestBed } from '@angular/core/testing';

import { EmpAuthGuard } from './emp-auth.guard';

describe('EmpAuthGuard', () => {
  let guard: EmpAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmpAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
