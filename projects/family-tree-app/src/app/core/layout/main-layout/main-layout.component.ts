import { AuthService } from 'projects/_services/auth.service';
import { SessionInfoDto } from './../../../models/DTO/SessionInfoDto';
import { AlertifyService } from './../../../../../../_services/alertify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alome-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  footerText = 'Login';
  loginMode = false;
  hide = true;
  isLoggedIn: boolean = false;
  loggedInMember: any = null;
  constructor(
    public authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    this.authService.getSession().subscribe((session:SessionInfoDto) => {
      this.loggedInMember = session.data.member;
      this.isLoggedIn = (session.data.member?.userId !=null)
    });
  }

  toggleLoginMode() {
    this.loginMode = !this.loginMode;
    this.footerText = this.loginMode ? 'Cancel' : 'Login';
  }

  login(model: any) {
      this.authService.login(model).subscribe(
        (next) => {
          this.authService.getSession().subscribe((session:SessionInfoDto) => {
            this.loggedInMember = session.data.member;
            this.isLoggedIn = (session.data.member?.userId !=null);
          });
        },
        (error) => {
          console.log(error);
          this.alertify.error('Failed to login : ' + error);
        }
      );
  }

  register(model: any) {
    this.authService.register(model).subscribe(
      (next) => {
        this.alertify.notify('Registered in successfully');
      },
      (error) => {
        this.alertify.error('Failed to Register');
      }
    );
  }

  logOut() {
    this.authService.logout().subscribe((next) => {
      this.authService.getSession().subscribe((session:SessionInfoDto) => {
        this.loggedInMember = session.data.member;
        this.isLoggedIn = (session.data.member?.userId !=null);
      });
      this.alertify.notify('Logged out');
    });
  }
}
