import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ElementsManagementPageComponent } from './pages/elements-management-page/elements-management-page.component';
import { ConfigurationManagementPageComponent } from './pages/configuration-management-page/configuration-management-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfigurationService} from './pages/configuration-management-page/configuration.service';
import { ElementsTableComponent } from './pages/elements-management-page/elements-table/elements-table.component'
import { AppEventHolder } from './common/app-events-holder.service'
import {Repository} from "./pages/elements-management-page/elements-table/repository.service";
import { ElementDetailsDialogComponent } from './pages/elements-management-page/element-details-dialog/element-details-dialog.component';
// import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CountriesHttpProvider} from "./pages/elements-management-page/elements-table/countries-http-provider.service";
import {AuthenticationService} from "./auth/authentication.service";
import { LoginDialogComponent } from './auth/login-dialog/login-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ElementsManagementPageComponent,
    ConfigurationManagementPageComponent,
    ElementsTableComponent,
    ElementDetailsDialogComponent,
    LoginDialogComponent,

  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  entryComponents:[ElementDetailsDialogComponent, LoginDialogComponent],
  providers: [ConfigurationService, AppEventHolder, Repository, CountriesHttpProvider, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
