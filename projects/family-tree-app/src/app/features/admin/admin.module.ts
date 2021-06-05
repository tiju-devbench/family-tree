import { FamilyService } from './../../../../../_services/family.service';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent, PersonCardDialog, PersonFormDialog } from './admin.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFileUploadModule } from 'mat-file-upload';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AdminComponent, PersonCardDialog, PersonFormDialog],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    MatFileUploadModule
  ],
  providers: [
    // ErrorInterceptorProvider,
    FamilyService
  ],
})
export class AdminModule { }
