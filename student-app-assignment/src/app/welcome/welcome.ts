import { Component } from '@angular/core';
import { RoleService } from '../services/role-service';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  name: string = 'Guest';
  constructor(
    public us: UserService,
    public rs: RoleService,
  ) {
    this.name = this.us.getName();
  }
}
