import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ElementsManagementPageComponent } from './pages/elements-management-page/elements-management-page.component';
import { ConfigurationManagementPageComponent } from './pages/configuration-management-page/configuration-management-page.component';
import { AppRoutingModule } from './app-routing.module';
import {ConfigurationService} from './pages/configuration-management-page/configuration.service';
import { ElementsTableComponent } from './pages/elements-management-page/elements-table/elements-table.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ElementsManagementPageComponent,
    ConfigurationManagementPageComponent,
    ElementsTableComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
