import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminControllerGuard } from './admin-controller-guard';

describe('adminControllerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => adminControllerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
