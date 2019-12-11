import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { RouterLinkActive, Router } from '@angular/router';
import { UserAuthentication } from 'src/app/models/user-authentication';
import { RoutingPath } from 'src/app/shared/constants/routing-path';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  userName = '';
  password = '';

  ngOnInit() {}

  login() {
    const userAuth = new UserAuthentication();
    userAuth.username = this.userName;
    userAuth.password = this.password;
    this.authService.login(userAuth);
  }

  cancel() {
    this.router.navigate([RoutingPath.Home]);
  }
}
