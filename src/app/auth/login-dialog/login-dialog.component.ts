import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<LoginDialogComponent>) {
  }

  ngOnInit() {
  }

  login(f) {
    this.dialogRef.close(f.form.controls.username.value);
  }

  cancel(f) {
    this.dialogRef.close();
  }
}
