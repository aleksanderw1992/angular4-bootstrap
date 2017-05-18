import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logoPath='\\assets\\img\\logocompany.png'
  dropdownLabels:Array<string> = [
    'Strona główna',
    'Zarządzanie elementami',
    'Konfiguracja aplikacji'
  ];
  selectedPage:string= this.dropdownLabels[0];
  constructor() {
  }

  onToogle(index){
    this.selectedPage= this.dropdownLabels[index];
  }
}
