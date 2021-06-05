import { SessionInfoDto, Session } from './../models/DTO/SessionInfoDto';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { AuthService } from 'projects/_services/auth.service';
import { Injectable, OnInit } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  antiForgeryToken: string;

  constructor(public auth: AuthService) {}

  private actions: string[] = ['POST', 'PUT', 'DELETE'];
  private forbiddenActions: string[] = ['HEAD', 'OPTIONS'];
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let permitted = this.findByActionName(request.method, this.actions);
    let forbidden = this.findByActionName(
      request.method,
      this.forbiddenActions
    );
    if (permitted !== undefined && forbidden === undefined) {
      this.auth.getSession().subscribe((session: SessionInfoDto) => {
        request = request.clone({
          setHeaders: {
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json',
            'RequestVerificationToken': session.data.antiForgeryToken,
          },
        });
      });
    }

    return next.handle(request);
  }

  private findByActionName(name: string, actions: string[]) {
    return actions.find(
      (action) => action.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
  }
}
