import { TestBed } from '@angular/core/testing';

import { AuthgGuard } from './authg.guard';

describe('AuthgGuard', () => {
  let guard: AuthgGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthgGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
