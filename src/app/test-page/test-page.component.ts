import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.sass']
})
export class TestPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login();
  }

  loginAdmin() {
    this.authService.loginAdmin();
  }

  logout() {
    this.authService.logout();
  }
}
