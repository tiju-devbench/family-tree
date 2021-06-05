import { Person } from './../../models/person';
import { Family } from './../../models/family';
import { AlertifyService } from './../../../../../_services/alertify.service';
import { FamilyService } from './../../../../../_services/family.service';
import { Component, OnInit, Inject } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  NgModel,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Contact } from '../../models/contact';
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

export interface DialogData {
  person: Person;
  isLinear: any;
  emailFormControl: any;
}
@Component({
  selector: 'alome-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  panelOpenState = false;
  dialogOpenState = false;
  showPerson = false;
  family: Family;
  person: Person;
  isLinear = false;
  emailFormControl = new FormControl('', [Validators.email]);
  response:string;
  constructor(
    public famService: FamilyService,
    public alertify: AlertifyService,
    public dialog: MatDialog,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer

  ) {
    this.family = new Family();
    this.family.Members = [];
    this.matIconRegistry.addSvgIcon(
      'close_custom',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/close.svg')
    )
  }

  openDialog(): void {
    this.dialogOpenState = true;
    const dialogRef = this.dialog.open(PersonCardDialog, {
      width: '600px',
      data: { name: '', animal: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dialogOpenState = false;
      console.log('The dialog was closed');
    });
  }

  openPersonFormDialog(): void {
    this.dialogOpenState = true;
    this.person = new Person();
    this.person.contact = new Contact();
    const dialogRef = this.dialog.open(PersonFormDialog, {
      width: '600px',
      autoFocus: false,
      maxHeight: '90vh',
      data: {
        isLinear: this.isLinear,
        emailFormControl: this.emailFormControl,
        person: this.person
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dialogOpenState = false;
      //console.log('The dialog was closed' + result.person.firstName);
      this.family.Members.push(result.person);
    });
  }

  ngOnInit(): void {}

  addFamily() {}
  addParent(model: any) {
    this.showPerson = true;
    this.famService.addPerson(model).subscribe(
      (next) => {
        this.alertify.notify('Family Member added');
      },
      (error) => {
        this.alertify.error('Failed to add family member');
      }
    );
  }
  addChild() {
    this.showPerson = true;
  }
}

@Component({
  selector: 'person-card-dialog',
  templateUrl: './dialogs/dialog-person-card.html',
  styleUrls: ['./dialogs/dialog-person-card.scss'],
})
export class PersonCardDialog {
  constructor(
    public dialogRef: MatDialogRef<PersonCardDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'person-form-dialog',
  templateUrl: './dialogs/dialog-person-form.html',
  styleUrls: ['./dialogs/dialog-person-form.scss'],
})
export class PersonFormDialog {
  srcResult: any;
  image:any;
  constructor(
    public dialogRef: MatDialogRef<PersonFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private sanitizer: DomSanitizer
  ) {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }
  onSelectedFilesChanged(fileList:File[]){
    var reader = new FileReader();
    reader.onload = (e: any) => {
      console.log(reader.result);
      this.image = reader.result;
      console.log(this.image);
    };
    reader.readAsDataURL(fileList[0]);

  }

}
