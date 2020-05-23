import { AuthService } from './../../../../../../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alome-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  footerText = "Login";
  loginMode = false;
  hide = true;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleLoginMode(){
    this.loginMode = !this.loginMode;
    this.footerText = this.loginMode? "Cancel": "Login";
  }

  login(model: any){
    this.authService.login(model)
      .subscribe(next => {
        console.log('Logged in successfully');
      },
      error=>{
        console.log('Failed to login')
      });
  }

  register(model: any){
    this.authService.register(model)
      .subscribe(next => {
        console.log('Registered in successfully');
      },
      error=>{
        console.log('Failed to Register')
      });
  }


  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut(){
    localStorage.removeItem('token');
  }

}
