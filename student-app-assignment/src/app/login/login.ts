import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../services/user-service';
import { RoleService } from '../services/role-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(
    private router: Router,
    public us: UserService,
    public rs: RoleService,
  ) {}

  abc(event: any) {
    event?.preventDefault();
    let uname: string = event.target.elements[0].value;
    let pwd: string = event.target.elements[1].value;
    let role: string = event.target.elements[2].value;
    console.log('Username : ' + uname);
    console.log('password : ' + pwd);
    console.log('Role : ' + role);

    if (uname === pwd && role === 'Admin') {
      this.router.navigate(['admin-page']);
      this.us.setName(uname);
      this.rs.setRole(role);
    } else if (uname === pwd && role === 'Staff') {
      this.router.navigate(['student-details']);
      this.us.setName(uname);
      this.rs.setRole(role);
    } else {
      this.router.navigate(['failure']);
    }
  }
}
