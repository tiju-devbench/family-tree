import { FamilyService } from './../../../../../_services/family.service';
import { FamilySummary, FamilySummaryResult } from './../../models/DTO/Family/FamilySummary';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'projects/_services/auth.service';
import { AlertifyService } from 'projects/_services/alertify.service';

@Component({
  selector: 'alome-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
families:FamilySummary[];
containerAlign:string= 'left';

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private familyService: FamilyService
  ) { }
  animating() { console.log('Animating...'); }
  animated() { console.log('Animated'); }

  log(msg: any) { console.log(msg); }


  ngOnInit(): void {
    this.loadFamilies();
  }

  loadFamilies(){
    this.familyService.loadFamilies().subscribe((families: FamilySummaryResult) => {
this.families = families.data.items;
    });
  }

  getContainerAlign(): string
  {
    this.containerAlign = (this.containerAlign == 'left')?
    'right':
    'left';
    return this.containerAlign;
  }

}
