import { Component, signal } from '@angular/core';
import { UserService } from './services/user-service';
import { RoleService } from './services/role-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  constructor(
    public us: UserService,
    public rs: RoleService,
  ) {}
  protected readonly title = signal('student-app-assignment');
}
