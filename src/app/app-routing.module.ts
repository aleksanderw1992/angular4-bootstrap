import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ElementsManagementPageComponent} from './pages/elements-management-page/elements-management-page.component';
import {ElementsTableComponent} from './pages/elements-management-page/elements-table/elements-table.component';
import {ConfigurationManagementPageComponent} from './pages/configuration-management-page/configuration-management-page.component'
import {MainPageComponent} from './pages/main-page/main-page.component'
import {ErrorPageComponent} from "./pages/error-page/error-page.component";

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'elements', component: ElementsManagementPageComponent, children: [
    { path: ':element-name', component: ElementsTableComponent}
  ] },
  { path: 'configuration', component: ConfigurationManagementPageComponent },
  { path: 'error404', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
