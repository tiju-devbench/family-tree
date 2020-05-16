import { AuthService } from './../../../../../../_services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alome-pagecenter-login',
  templateUrl: './pagecenter-login.component.html',
  styleUrls: ['./pagecenter-login.component.scss']
})
export class PagecenterLoginComponent implements OnInit {
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
