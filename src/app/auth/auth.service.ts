import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface authValue{
  accessToken: string;
  user: {
    email: string;
    id: number;
    name: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
timeout: any;
url = 'http://localhost:4201'
private authSub = new BehaviorSubject<authValue| null>(null);
user$ = this.authSub.asObservable();
jwthelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {
    this.restore();
  }

  login(e: { email: string; password: string }) {
    return this.http.post<authValue>(`${this.url}/login`, e).pipe(
        tap((e) => {
          this.authSub.next(e);
          localStorage.setItem('user', JSON.stringify(e));
          this.autoLogOut(e);
        })
      );
  }

  register(e: { email: string; password: string; name: string }) {
    return this.http
      .post(`${this.url}/register`, e)
  }

  restore() {
    const userJson = localStorage.getItem('user');
    if (!userJson) {
      return;
    }
    const user: authValue = JSON.parse(userJson);
    if (this.jwthelper.isTokenExpired(user.accessToken)) {
      return;
    }
    this.authSub.next(user);
    this.autoLogOut(user);
  }

  logout() {
    this.authSub.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  autoLogOut(user: authValue) {
    const dateEx = this.jwthelper.getTokenExpirationDate(
      user.accessToken
    ) as Date;
    const msEx = dateEx.getTime() - new Date().getTime();
    this.timeout = setTimeout(() => {
      this.logout();
    }, msEx);
  }
}
