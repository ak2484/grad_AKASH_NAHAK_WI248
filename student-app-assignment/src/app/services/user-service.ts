import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private name: string = 'Guest';
  constructor() {}

  setName(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
