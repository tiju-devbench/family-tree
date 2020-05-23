import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alome-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() registerModel = new EventEmitter();
  model: any = {};
  registerMode = false;
  hide = true;
  constructor() {}

  ngOnInit(): void {}

  register() {
    this.registerModel.emit(this.model);
    this.registerMode = false;
  }
  registerToggle() {
    this.registerMode = true;
  }
  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
