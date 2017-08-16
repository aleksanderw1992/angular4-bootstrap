import {Component, Inject, Input} from '@angular/core';
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
    view: {title:'elements.modal.view.title', confirm: '', cancel: 'elements.modal.view.cancel'},
    add: {title:'elements.modal.add.title', confirm: 'elements.modal.add.confirm', cancel: 'elements.modal.add.cancel'},
    edit: {title:'elements.modal.edit.title', confirm: 'elements.modal.edit.confirm', cancel: 'elements.modal.edit.cancel'},
    delete: {title:'elements.modal.delete.title', confirm: 'elements.modal.delete.confirm', cancel: 'elements.modal.delete.cancel'},
  }

  save(f:any) {
    this.data.data=f.value;
    this.dialogRef.close(this.data);
  }

  cancel(f:any) {
    console.log(f)
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
