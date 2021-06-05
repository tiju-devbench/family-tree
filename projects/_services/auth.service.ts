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
export class AuthService implements OnInit {
  baseUrl = environment.apiUrl + 'auth/';
  isLoggedIn:boolean = false;
  loggedInMember: any;
  antiForgeryToken: string = '';
  httpOptions: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  login(model: any) {
      return this.http.post(this.baseUrl + 'login', model, this.httpOptions);
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model, this.httpOptions);
  }

  logout() {
    return this.http.post(this.baseUrl + 'sign-out',null, this.httpOptions);
  }

  getSession() {
    return this.http.get(this.baseUrl + 'session').pipe(map((session:SessionInfoDto)=>{
      this.setRequestHeaders(session);
      this.loggedInMember = session.data.member;
      return session;
    }));
  }

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
