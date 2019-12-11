import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth-service.service';

import decode from 'jwt-decode';
import { UserAuthentication } from '../models/user-authentication';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.sass']
})
export class TestPageComponent implements OnInit {
  get token() {
    return decode(localStorage.getItem('token'));
  }

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    const userAuth = new UserAuthentication();
    userAuth.username = 'test';
    userAuth.password = 'test';
    this.authService.login(userAuth);
  }

  logout() {
    this.authService.logout();
  }

  getUsers() {
    this.authService.getUsers().subscribe();
  }
}
