import { AuthService } from './../../../../../../_services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alome-topnav-login',
  templateUrl: './topnav-login.component.html',
  styleUrls: ['./topnav-login.component.scss']
})
export class TopnavLoginComponent implements OnInit {
  @Output() loginModel = new EventEmitter();
  model: any = {};
  hide = true;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.loginModel.emit(this.model);
  }
}
