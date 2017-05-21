import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppEventHolder } from '../common/app-events-holder.service'
import {AuthenticationService} from "../auth/authentication.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logoPath='\\assets\\img\\boss.jpg'

  dropdownLabels:Array<{id:string, name:string, route:string}> = [
    {id:'main',name:'Strona główna',route:'/main'},
    {id:'elemets',name:'Zarządzanie elementami',route:'/elemets'},
    {id:'configuration',name:'Konfiguracja aplikacji',route:'/configuration'}
  ];
  selectedPage:string= this.dropdownLabels[0].name;
  constructor(private router: Router,
              private appEventHolder:AppEventHolder,
  private authenticationService: AuthenticationService) {

    this.appEventHolder.page.subscribe((data) => {
        this.selectedPage =  this.dropdownLabels.filter(e =>e.id === data)[0].name as string;
    });
  }

  onToogle(index){
    this.selectedPage= this.dropdownLabels[index].name;
    this.router.navigate([this.dropdownLabels[index].route]);
  }
  isAuthenticated(){
    return this.authenticationService.isAuthenticated()

  }
  authenticatedUser(){
    return this.authenticationService.authenticatedUser || 'Gość';
  }
  login(){

  }
  logout(){

  }
}
