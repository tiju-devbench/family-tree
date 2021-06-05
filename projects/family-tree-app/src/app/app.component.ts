import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'projects/_services/auth.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'alome-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'family-tree-app';
  jwtHelper = new JwtHelperService();
  constructor(private authService: AuthService) {}

  ngOnInit() {

  }
}
