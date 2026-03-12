import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user-service';
import { RoleService } from '../services/role-service';
import { inject } from '@angular/core';

export const roleControllerGuard: CanActivateFn = (route, state) => {
  let us: UserService = inject(UserService);
  let rs: RoleService = inject(RoleService);

  if (us.getName() === 'Guest') {
    return false;
  }
  const allowedRoles = route.data['roles'] as string[];

  if (allowedRoles.includes(rs.getRole())) {
    return true;
  } else {
    return false;
  }
};
