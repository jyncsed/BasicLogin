import { Component, OnInit } from '@angular/core';
import { RoutingPath } from '../../constants/routing-path';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.sass']
})
export class NavigationbarComponent implements OnInit {
  get loggedIn() {
    return this.authService.isAuthenticated();
  }
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  navigate(place: string) {
    switch (place) {
      case 'login': {
        this.router.navigate([RoutingPath.Login]);
        break;
      }
      case 'logout': {
        this.authService.logout();
      }
    }
  }
}
