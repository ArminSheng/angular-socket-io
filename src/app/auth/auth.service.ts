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

  login () {
    this.isLoggedIn = true;
  }

  logout (): void {
    this.isLoggedIn = false;
  }
}
