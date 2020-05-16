import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { TopnavLoginComponent } from './layout/topnav-login/topnav-login.component';
import { PagecenterLoginComponent } from './layout/pagecenter-login/pagecenter-login.component';

@NgModule({
  declarations: [MainLayoutComponent, TopnavLoginComponent, PagecenterLoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    FlexLayoutModule,
    // material
    MaterialModule,
    FormsModule
  ],
  exports:[
    MainLayoutComponent,
    TopnavLoginComponent,
    PagecenterLoginComponent
  ]
})
export class CoreModule { }
