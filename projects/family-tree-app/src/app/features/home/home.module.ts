import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AnimateModule } from '../../animate/animate.module';
import { FamilyService } from 'projects/_services/family.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AnimateModule
  ],
  providers: [
    FamilyService
  ],
})
export class HomeModule { }
