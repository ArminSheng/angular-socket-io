import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl = '';
  user;

  constructor() { }

  login () {
    this.isLoggedIn = true;
  }

  logout (): void {
    this.isLoggedIn = false;
  }
}
