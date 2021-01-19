import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "./../../../environments/environment";
import { User } from "../../interfaces/user";

import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
  public token: string = '';
  private serverUrl = environment.serverUrl;

  constructor(private http: HttpClient, private router: Router) { }

  public register(username: string, email: string) {
    let url = `${this.serverUrl}/register`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: this.token
      })
    };
    return this.http.post(url, { username, email }, httpOptions)
      .pipe(
        tap((res: any) => {
          console.log("AuthService -> register -> res", res)
          return res
        })
      );
  }

  public login(email: string, password: string) {
    let url = `${this.serverUrl}/login`;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(url, { email, password }, httpOptions)
      .pipe(
        tap((res: User) => {
          this.token = res.token;
          if (this.token) {
            this.user = res;
            localStorage.setItem('token', this.token);
            localStorage.setItem('user', JSON.stringify(this.user));
          } else {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
          }
          return this.token;
        })
      )
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  public getUser() {
    let user = localStorage.getItem('user');
    return this.user = JSON.parse(user);
  }

  public changepassword(currentPassword, newPassword) {
    const url = `${this.serverUrl}` + '/user/changepassword';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: this.token
      })
    };
    return this.http.post(url, { currentPassword, newPassword }, httpOptions)
      .pipe(
        tap((res: any) => {
          return res
        })
      );
  }
  public forgotpassword(email) {
    const url = `${this.serverUrl}` + '/forgotpassword';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post(url, { email }, httpOptions)
      .pipe(
        tap((res: any) => {
          return res
        })
      );
  }

  public resetpassword(newPassword, token, email) {
    const url = `${this.serverUrl}` + '/resetpassword';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post(url, { newPassword, token, email }, httpOptions)
      .pipe(
        tap((res: any) => {
          return res
        })
      );
  }
}
