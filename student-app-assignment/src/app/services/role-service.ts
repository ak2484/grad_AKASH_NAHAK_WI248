import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  role: string = 'Staff';
  constructor() {}

  setRole(role: string) {
    this.role = role;
  }
  getRole() {
    return this.role;
  }
}
