import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-element-details-dialog',
  templateUrl: './element-details-dialog.component.html',
  styleUrls: ['./element-details-dialog.component.scss']
})
export class ElementDetailsDialogComponent {
  constructor(public dialogRef: MdDialogRef<ElementDetailsDialogComponent>) {}
}
