import { SessionInfoDto } from './../family-tree-app/src/app/models/DTO/sessionInfoDto';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { environment } from './../family-tree-app/src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  loggedInMember: any;
  constructor(private http: HttpClient) {}

  login(model: any) {
      return this.http.post(this.baseUrl + 'login', model).pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            this.loggedInMember = user;
            localStorage.setItem('token', user.token);
            this.decodedToken = this.jwtHelper.decodeToken(user.token);
            console.log(this.decodedToken);
          }
        })
      );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

  getSession() {
    return this.http.get(this.baseUrl + 'session');
  }


  //Moved the below implementation to HTTPInterceptor
  setRequestHeaders(session: SessionInfoDto) {
    this.antiForgeryToken = session.data.antiForgeryToken;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json',
        'RequestVerificationToken': this.antiForgeryToken,
      }),
      withCredentials: true
    };
  }
}
