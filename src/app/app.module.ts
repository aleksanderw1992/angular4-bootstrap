import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {ElementsManagementPageComponent} from './pages/elements-management-page/elements-management-page.component';
import {ConfigurationManagementPageComponent} from './pages/configuration-management-page/configuration-management-page.component';
import {AppRoutingModule} from './app-routing.module';
import {ConfigurationService} from './pages/configuration-management-page/configuration.service';
import {ElementsTableComponent} from './pages/elements-management-page/elements-table/elements-table.component'
import {AppEventHolder} from './common/app-events-holder.service'
import {Repository} from "./pages/elements-management-page/elements-domain/repository.service";
import {ElementDetailsDialogComponent} from './pages/elements-management-page/element-details-dialog/element-details-dialog.component';
// import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CountriesHttpProvider} from "./pages/elements-management-page/elements-domain/countries-http-provider.service";
import {AuthenticationService} from "./auth/authentication.service";
import {LoginDialogComponent} from './auth/login-dialog/login-dialog.component';
import {AlertDialogComponent} from './common/alert-dialog/alert-dialog.component';
import {ConfirmDialogComponent} from './common/confirm-dialog/confirm-dialog.component';
import {DropdownDirective} from "./common/directives/dropdown.directive";
import {SequenceHolder} from "app/pages/elements-management-page/elements-domain/sequence-holder.service";
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { MyErrorHandler } from './pages/error-page/my-error-handler.service';
import {MyErrorMessageHolder} from "./pages/error-page/my-error-message-holder.service";
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { FooterComponent } from './footer/footer.component';
import {DropdownDirectiveMouseEnter} from "./common/directives/dropdown-mouse-enter.directive";
import { BookIconsComponent } from './header/book-icons/book-icons.component';
import {AppTranslationModule} from "./app-translation.module";

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
    AlertDialogComponent,
    ConfirmDialogComponent,
    DropdownDirective,
    DropdownDirectiveMouseEnter,
    ErrorPageComponent,
    FooterComponent,
    BookIconsComponent

  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    AppRoutingModule,
    AppTranslationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    SlimLoadingBarModule.forRoot()
  ],
  entryComponents: [ElementDetailsDialogComponent, LoginDialogComponent, AlertDialogComponent, ConfirmDialogComponent],
  providers: [ConfigurationService, AppEventHolder, Repository, CountriesHttpProvider, AuthenticationService,
    SequenceHolder, {provide: ErrorHandler, useClass: MyErrorHandler}, MyErrorMessageHolder],
  bootstrap: [AppComponent]
})
export class AppModule {
}
