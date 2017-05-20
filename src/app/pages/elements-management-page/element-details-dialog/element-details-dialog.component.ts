import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';


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
    view: {confirm: '', cancel: 'Wróć'},
    add: {confirm: 'Dodaj', cancel: 'Wróć'},
    edit: {confirm: 'Edytuj', cancel: 'Wróć'},
    delete: {confirm: 'Usuń', cancel: 'Wróć'},
  }

  save() {
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
}
