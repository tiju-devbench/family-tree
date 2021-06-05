import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule,MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatDividerModule,
        MatDialogModule,
        MatCardModule,
        MatStepperModule,
        MatProgressSpinnerModule],
exports:[
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatDividerModule,
        MatDialogModule,
        MatCardModule,
        MatStepperModule,
        MatProgressSpinnerModule],
providers: [
                { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
                  {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
              ]
})
export class MaterialModule{}
