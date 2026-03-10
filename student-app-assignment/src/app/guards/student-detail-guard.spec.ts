import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { studentDetailGuard } from './student-detail-guard';

describe('studentDetailGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => studentDetailGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
