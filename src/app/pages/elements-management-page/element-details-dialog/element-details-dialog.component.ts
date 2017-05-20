import {Component, Inject, Input} from '@angular/core';
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';
import {NgModel} from "@angular/forms";


@Component({
  selector: 'app-element-details-dialog',
  templateUrl: './element-details-dialog.component.html',
  styleUrls: ['./element-details-dialog.component.scss']
})
export class ElementDetailsDialogComponent {
  constructor(public dialogRef: MdDialogRef<ElementDetailsDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any) {
  }
  constants = {
    view: {title:'Okno podglądu', confirm: '', cancel: 'Wróć'},
    add: {title:'Okno dodawania', confirm: 'Dodaj', cancel: 'Wróć'},
    edit: {title:'Okno edycji', confirm: 'Edytuj', cancel: 'Wróć'},
    delete: {title:'Okno usunięcia', confirm: 'Usuń', cancel: 'Wróć'},
  }

  save(f:any) {
    this.data.data=f.value;
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close('cancelled');
  }

  readonly(): boolean {
    return this.data.crudDialogOption === 'view' || this.data.crudDialogOption === 'delete';
  }

  cancelButtonText() {
    return this.constants[this.data.crudDialogOption].cancel
  }

  confirmButtonText() {
    return this.constants[this.data.crudDialogOption].confirm
  }
  dialogTitleText(){
    return this.constants[this.data.crudDialogOption].title
  }
}
