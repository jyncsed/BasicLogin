import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, pipe, throwError} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { UserAuthentication } from '../models/user-authentication';
import { Authenticaion } from '../models/authenticaion';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private helper = new JwtHelperService();
  private token = localStorage.getItem('token');

  get isTokenExpired() {
    return this.helper.isTokenExpired(this.token);
  }

  get userRole() {
    const tokenDecoded = this.helper.decodeToken(this.token);
    return tokenDecoded.role;
  }

  constructor(private router: Router, private http: HttpClient) { }

  clear(): void {
    this.token = '';
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return this.token != null && !this.isTokenExpired;
  }

  login(userAuthentication: UserAuthentication): void {
   this.http.post<Authenticaion>(environment.baseAPIUrl + 'users/authenticate/',  userAuthentication)
   .subscribe(data => {
     localStorage.setItem('token', data.token);
     this.token = data.token;
   });
   this.router.navigate(['/test']);
  }

  logout(): void {
    this.clear();
    this.router.navigate(['/test']);
  }

  getToken() {
    return this.token;
  }

  getUsers(): Observable<any> {
   return this.http.get<User[]>(environment.baseAPIUrl + 'users');
  }
}
