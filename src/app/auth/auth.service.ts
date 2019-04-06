import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl = '';
  user: User;

  constructor() { }

  getUser () {
    return this.user;
  }

  login (user: User) {
    this.user = user;
    this.isLoggedIn = true;
  }

  logout (): void {
    this.isLoggedIn = false;
  }
}
