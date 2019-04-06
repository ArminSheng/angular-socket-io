import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '_@angular_router@7.2.10@@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login (val) {
    this.authService.login(new User(val));
    
    if (this.authService.isLoggedIn) {
      const redirect = this.authService.redirectUrl;

      this.router.navigate([redirect]);
    }
  }

}
