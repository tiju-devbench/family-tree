import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alome-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }

}
