import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user-service';
import { RoleService } from '../services/role-service';
import { inject } from '@angular/core';

export const adminControllerGuard: CanActivateFn = (route, state) => {
  let us: UserService = inject(UserService);
  let rs: RoleService = inject(RoleService);

  if (us.getName() === 'Guest') {
    return false;
  } else if (rs.getRole() === 'Admin') {
    return true;
  } else {
    return false;
  }
};
