import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  logoPath;
  constructor() {
    this.logoPath='\\assets\\img\\logocompany.png'
  }


}
