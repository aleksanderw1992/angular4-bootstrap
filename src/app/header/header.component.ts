import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logoPath='\\assets\\img\\logocompany.png'

  dropdownLabels:Array<{name:string, route:string}> = [
    {name:'Strona główna',route:'/main'},
    {name:'Zarządzanie elementami',route:'/elemets'},
    {name:'Konfiguracja aplikacji',route:'/configuration'}
  ];
  selectedPage:string= this.dropdownLabels[0].name;
  constructor(private router: Router) {
  }

  onToogle(index){
    this.selectedPage= this.dropdownLabels[index].name;
    this.router.navigate([this.dropdownLabels[index].route]);

  }
}
