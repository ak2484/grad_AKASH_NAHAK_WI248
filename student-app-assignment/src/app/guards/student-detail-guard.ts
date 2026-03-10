import { CanActivateFn } from '@angular/router';
import { RoleService } from '../services/role-service';
import { UserService } from '../services/user-service';
import { inject } from '@angular/core';

export const studentDetailGuard: CanActivateFn = (route, state) => {
  let us: UserService = inject(UserService);
  let rs: RoleService = inject(RoleService);

  if (us.getName() === 'Guest') {
    return false;
  } else if (rs.getRole() === 'Staff') {
    return true;
  } else {
    return false;
  }
};
