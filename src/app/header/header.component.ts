import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppEventHolder} from '../common/app-events-holder.service'
import {AuthenticationService} from "../auth/authentication.service";
import {MdDialog} from "@angular/material";
import {LoginDialogComponent} from "../auth/login-dialog/login-dialog.component";
import {ConfirmDialogComponent} from "../common/confirm-dialog/confirm-dialog.component";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logoPath = '\\assets\\img\\boss.jpg'

  dropdownLabels: Array<{ id: string, name: string, route: string }> = [
    {id: 'main', name: 'Strona główna', route: '/main'},
    {id: 'elements', name: 'Zarządzanie elementami', route: '/elements'},
    {id: 'configuration', name: 'Konfiguracja aplikacji', route: '/configuration'}
  ];
  selectedPage: string = this.dropdownLabels[0].name;

  constructor(private router: Router,
              private appEventHolder: AppEventHolder,
              private authenticationService: AuthenticationService,
              public dialog: MdDialog) {

    this.appEventHolder.page.subscribe((data) => {
      this.selectedPage = this.dropdownLabels.filter(e => e.id === data)[0].name as string;
    });
  }

  onToogle(index) {
    this.selectedPage = this.dropdownLabels[index].name;
    this.router.navigate([this.dropdownLabels[index].route]);
  }

  isAuthenticated() {
    return this.authenticationService.isAuthenticated()

  }

  authenticatedUser() {
    return this.authenticationService.authenticatedUser || 'Gość';
  }

  login() {
    // let dialogRef = this.dialog.open(LoginDialogComponent, {
    //   disableClose: true,
    //   role: 'dialog'
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    //   if (result) {
    //     this.authenticationService.login(result)
    //   }
    // });
    var a = 'asdf'.sub()[-1].sub().charAt(-1).sub()//mock error
  }
  logout(){
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        content:'Czy na pewno chcesz się wylogować?'
      },
      disableClose: true,
      role: 'dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authenticationService.logout()
      }
    });
  }
  clear(){
    window.localStorage.clear()
    window.location.reload(true)
  }
}
