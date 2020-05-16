import { AuthService } from './../../../../../../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alome-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  hide = true;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
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


  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut(){
    localStorage.removeItem('token');
  }

}
