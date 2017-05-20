import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-element-details-dialog',
  templateUrl: './element-details-dialog.component.html',
  styleUrls: ['./element-details-dialog.component.scss']
})
export class ElementDetailsDialogComponent {
  constructor(public dialogRef: MdDialogRef<ElementDetailsDialogComponent>,
  @Inject(MD_DIALOG_DATA) public data: any) {}

  save(){
    this.dialogRef.close(this.data);
  }
  cancel(){
    this.dialogRef.close('cancelled');
  }
}
